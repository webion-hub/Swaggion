import { firstLetterUpperCase } from "../firstLetterUpperCase";
import { fillFile } from "./fillFile";
import path from "path";
import fs from "fs";
import { getPathName } from "../getPathName";
import { getIdPieces } from "./getIdPieces";
import { createEndpoints } from "./createEndpoints";
import { createEndpointImports } from "./createEndpointImports";

export function createPartialPath(opts: {
  paths: string[];
  root: string[];
  schemas: any;
  openApiPathContent: any
}) {
  const isAnId = opts.paths[0].includes("{")

  const folderName = getPathName(opts.paths)[0];
  const folderPath = path.join(...getPathName(opts.root), folderName);
  const folderPathExists = fs.existsSync(folderPath);

  const fileName = `${firstLetterUpperCase(folderName)}.ts`;
  const filePath = path.join(folderPath, fileName);

  if (!folderPathExists) {
    fs.mkdirSync(folderPath);

    const fileContent = 
`import { Endpoint } from "@webion/api";
import { AxiosInstance } from 'axios';
${createEndpointImports({ openApiPathContent: opts.openApiPathContent, folderPath, schemas: opts.schemas })}

export class ${firstLetterUpperCase(folderName)} extends Endpoint {
  ${isAnId ? (getIdPieces({}).constructor) : `
  constructor(
    readonly client: AxiosInstance,
    readonly parent: { url: string }
  ) {
    super(client);
  }`}
  ${createEndpoints({ openApiPathContent: opts.openApiPathContent })}
  ${isAnId ? (getIdPieces({}).url) : `
  get url() {
    return \`/\${this.parent.url}/${opts.paths[0]}\`;
  }`
  }
}`

    fs.writeFileSync(filePath, fileContent, "utf-8");
  }

  const nextPart = opts.paths[1];

  if(!nextPart) {
    return;
  }

  fillFile(filePath, nextPart, opts.openApiPathContent);
}