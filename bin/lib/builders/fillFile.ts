import fs from "fs";
import path from "path";
import { firstLetterUpperCase } from "../firstLetterUpperCase";
import { getPathName } from "../getPathName";
import { getIdPieces } from "./getIdPieces";

export function fillFile(rootPath: string, part: string, openApiPathContent?: any) {
  const rootFilePath = path.join(getPathName([rootPath])[0]);
  const rootFileContent = fs.readFileSync(rootFilePath, "utf-8");
  const rootFileContentArray = rootFileContent.split("\n");
  const rootFileContentArrayLength = rootFileContentArray.length;
  const lastLine = rootFileContentArray[rootFileContentArrayLength - 1];
  const allButLastLine = rootFileContentArray.slice(0, rootFileContentArrayLength - 1);

  const fileName = getPathName([part])[0];
  const isAnId = part.includes("{");

  const newImport = `import { ${firstLetterUpperCase(fileName)} } from "./${fileName}/${firstLetterUpperCase(fileName)}";`;

  const isAlreadyImported = rootFileContentArray
    .some((line) => line.includes(newImport));

  if (isAlreadyImported) {
    return;
  }

  const newRootFileContent = `
${newImport}
${rootFileContentArray.slice(0, allButLastLine.length).join("\n")}
${
  isAnId 
    ? (getIdPieces({ fileName, openApiPathContent }).getter) 
    : (
  `
  get ${fileName.replaceAll('{', '').replaceAll('}', '')}() {
    return new ${firstLetterUpperCase(fileName.replaceAll('{', '').replaceAll('}', ''))}(this.client, this);
  }`
      )
}
${lastLine}`;

  fs.writeFileSync(rootFilePath, newRootFileContent, "utf-8");
}