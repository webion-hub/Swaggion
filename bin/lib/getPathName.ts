import { toCamelCase } from "./toCamelCase";

export function getPathName(path: string[]) {
  return path
    .map(p => p.replaceAll('{', '').replaceAll('}', ''))
    .map(p => toCamelCase(p))
    .map(p => p.charAt(0).toLocaleLowerCase() + p.slice(1));
}