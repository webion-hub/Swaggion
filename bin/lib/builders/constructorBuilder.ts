export function constructorBuilder(isAnId: boolean, opts: { openApiPathContent?: any }) {
  const idType = opts.openApiPathContent 
    ? (Object.values(opts.openApiPathContent)?.[0] as any)
        ?.parameters?.[0]
        ?.schema
        ?.type
    : 'any';

  return isAnId 
? `constructor(
    readonly client: AxiosInstance,
    readonly parent: { url: string },
    readonly id: ${idType},
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
