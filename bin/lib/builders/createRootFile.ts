import path from "path";
import { toCamelCase } from "../toCamelCase";
import { firstLetterUpperCase } from "../firstLetterUpperCase";
import fs from "fs";
import { ROOT } from "../data";

export const createRootFile = (opts: { name: string }) => {
  fs.mkdirSync(ROOT, { recursive: true });

  const mainFileName = toCamelCase(opts.name);
  const newFilePath = path.join(ROOT, `${mainFileName}.ts`);

  const fileContent = `//#region IMPORTS
import { ApiBase } from "@webion/api";
//#endregion

export class ${firstLetterUpperCase(mainFileName)} extends ApiBase {
  get url() {
    return '';
  }

  //#region SUB-PATHS
  //#endregion
}`;

  fs.writeFileSync(newFilePath, fileContent, "utf-8");

  return newFilePath;
} 