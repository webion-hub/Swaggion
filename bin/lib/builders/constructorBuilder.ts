export function constructorBuilder(isAnId: boolean, opts: { openApiPathContent?: any, part: string }) {
  const parameters = (Object.values(opts.openApiPathContent)?.[0] as any)?.parameters;

  const idType = opts.openApiPathContent 
    ? parameters?.find((param: any) => param.name === opts.part.replaceAll('{', '').replaceAll('}', ''))
        ?.schema
        ?.type
    : 'any';

  return isAnId 
? `constructor(
    readonly client: AxiosInstance,
    readonly parent: { url: string },
    readonly id: ${idType === 'integer' ? 'number' : idType},
  ) {
    super(client);
  }`
: `constructor(
    readonly client: AxiosInstance,
    readonly parent: { url: string }
  ) {
    super(client);
  }`
}
