import { firstLetterUpperCase } from "../firstLetterUpperCase";
import { getPathName } from "../getPathName";

export function importsBuilder(opts: { part?: string }) {
  if(!opts.part) {
    return ''
  }
  
  const fileName = getPathName([opts.part])[0];
  return `\nimport { ${firstLetterUpperCase(fileName)} } from "./${fileName}/${firstLetterUpperCase(fileName)}";`;
}
