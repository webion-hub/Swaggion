import { firstLetterUpperCase } from "../firstLetterUpperCase";

export function getIdPieces(opts: {
  fileName?: string,
  openApiPathContent?: any
}) {
  const fileName = opts.fileName?.replaceAll('{', '')?.replaceAll('}', '') ?? '';
  const idType = opts.openApiPathContent 
    ? (Object.values(opts.openApiPathContent)[0] as any)
        .parameters[0]
        .schema
        .type
    : 'any';

  return {
    getter: `
  id = (id: ${idType}) => {
    return new ${firstLetterUpperCase(fileName)}(this.client, this, id);
  }
    `,
    constructor: `
  constructor(
    readonly client: AxiosInstance,
    readonly parent: { url: string },
    readonly id: string,
  ) {
    super(client);
  }
    `,
    url: `
  get url() {
    return \`/\${this.parent.url}/\${this.id}\`;
  }`
  }
}