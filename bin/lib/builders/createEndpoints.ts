import { getContentStatus200Schema } from "../getContentStatus200Schema"
import { getRequestBody } from "../getRequestBody"

export function createEndpoints(opts: { openApiPathContent: any, rawPartialPath: string[] }) {
  const entries = Object.entries(opts.openApiPathContent)

  return entries.map(([method, methodOpts]: [string, any]) => {
    const { 
      interfaceName: resInterfaceName, 
      thereIsContentStatus200Schema 
    } = getContentStatus200Schema(methodOpts) 

    const { 
      interfaceName: reqInterfaceName,
      thereIsRequestBodySchema, 
    } = getRequestBody(methodOpts) 

    const res = thereIsContentStatus200Schema 
      ? `<${resInterfaceName}>` 
      : ''

    const req = thereIsRequestBodySchema
      ? `req: ${reqInterfaceName}`
      : ''

    const reqBody = thereIsRequestBodySchema
      ? `, req`
      : ''

    const endpointUrl = ['', ...opts.rawPartialPath].join('/')
      
    if(method === 'get') {
      const params = thereIsRequestBodySchema ? `, { params: req }` : ''

      return `
  //GET ${endpointUrl}
  get = (${req}) => this.client.get${res}(this.url${params})`
    }

    if(method === 'post') {
      return `
  //POST ${endpointUrl}
  post = (${req}) => this.client.post${res}(this.url${reqBody})`
    }
    
    if(method === 'put') {
      return `
  //PUT ${endpointUrl}
  put = (${req}) => this.client.put${res}(this.url${reqBody})`
    }

    if(method === 'delete') {
      return `
  //DELETE ${endpointUrl}
  delete = (${req}) => this.client.delete${res}(this.url${reqBody})`
    }

    if(method === 'patch') {
      return `
  //PATCH ${endpointUrl}
  patch = (${req}) => this.client.patch${res}(this.url${reqBody})`
    }
  })
  .join('\n')
}