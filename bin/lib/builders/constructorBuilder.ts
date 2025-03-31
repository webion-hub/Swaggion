export function constructorBuilder(isAnId: boolean, opts: { openApiPathContent?: any }) {
  const parameters = (Object.values(opts.openApiPathContent)?.[0] as any)?.parameters;

  const idType = opts.openApiPathContent 
    ? parameters?.[parameters.length - 1]
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
