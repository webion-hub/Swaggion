import path from "path";
import { toCamelCase } from "../toCamelCase";
import { firstLetterUpperCase } from "../firstLetterUpperCase";
import fs from "fs";
import { ROOT } from "../data";

export const createRootFile = (opts: { name: string }) => {
  const newDirPath = path.join(process.cwd(), ROOT);

  fs.mkdirSync(newDirPath, { recursive: true });

  const mainFileName = toCamelCase(opts.name);
  const newFilePath = path.join(newDirPath, `${mainFileName}.ts`);

  const fileContent = `import { ApiBase } from "@webion/api";

class ${firstLetterUpperCase(mainFileName)} extends ApiBase {
  get url() {
    return '';
  }
}`;

  fs.writeFileSync(newFilePath, fileContent, "utf-8");

  return newFilePath;
} 