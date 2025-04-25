import { firstLetterUpperCase } from "../firstLetterUpperCase";
import { getPathName } from "../getPathName";

export function getterBuilder(isAnId: boolean, opts: { openApiPathContent?: any, part: string }) {
  const parameters = (Object.values(opts.openApiPathContent)?.[0] as any)?.parameters;

  const idType = opts.openApiPathContent 
    ? parameters?.find((param: any) => param.name === opts.part.replaceAll('{', '').replaceAll('}', ''))
        ?.schema
        ?.type
    : 'any';

  const type = !idType
    ? 'any'
    : idType

  const fileName = getPathName([opts.part])[0];

  if(isAnId) {
    return `
  id = (id: ${type === 'integer' ? 'number' : type}) => {
    return new ${firstLetterUpperCase(fileName)}(this.client, this, id);
  }`
  }
    
  return `
  get ${fileName}() {
    return new ${firstLetterUpperCase(fileName)}(this.client, this);
  }
`
}