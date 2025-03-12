import { getContentStatus200Schema } from "../getContentStatus200Schema"
import { getRequestBody } from "../getRequestBody"

export function createEndpoints(opts: { openApiPathContent: any }) {
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
      
    if(method === 'get') {
      const params = thereIsRequestBodySchema ? `, { params: req }` : ''

      return `
  get = (${req}) => this.client.get${res}(this.url${params})`
    }

    if(method === 'post') {
      return `
  post = (${req}) => this.client.post${res}(this.url${reqBody})`
    }
    
    if(method === 'put') {
      return `
  put = (${req}) => this.client.put${res}(this.url${reqBody})`
    }

    if(method === 'delete') {
      return `
  delete = (${req}) => this.client.delete${res}(this.url${reqBody})`
    }

    if(method === 'patch') {
      return `
  patch = (${req}) => this.client.patch${res}(this.url${reqBody})`
    }
  })
  .join('\n')
}