import { firstLetterUpperCase } from "../firstLetterUpperCase";
import { getPathName } from "../getPathName";

export function getterBuilder(isAnId: boolean, opts: { openApiPathContent?: any, part: string }) {
  const idType = opts.openApiPathContent 
    ? (Object.values(opts.openApiPathContent)?.[0] as any)
        ?.parameters?.[0]
        ?.schema
        ?.type
    : 'any';

  const fileName = getPathName([opts.part])[0];

  if(isAnId) {
    return `
  id = (id: ${idType}) => {
    return new ${firstLetterUpperCase(fileName)}(this.client, this, id);
  }`
  }
    
  return `
  get ${fileName}() {
    return new ${firstLetterUpperCase(fileName)}(this.client, this);
  }
`
}