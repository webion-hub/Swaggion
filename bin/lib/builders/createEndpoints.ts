import { getContentStatus200Schema } from "../getContentStatus200Schema"
import { getFormData } from "../getFormData"
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

    const {
      code: formDataCode,
      thereIsAFormData
    } = getFormData(methodOpts)

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
    
    const comment = [methodOpts.summary, methodOpts.description]
      .filter(x => x)  
      .join(' -- ')

    

    const jsDoc = 
  `/**
   * ${method.toUpperCase()} ${endpointUrl}
   * @description ${comment}
   */`

    /* ------------ APPLICATION JSON ------------ */ 

    if(method === 'get') {
      const params = thereIsRequestBodySchema ? `, { params: req }` : ''

      return `
  ${jsDoc}
  get = (${req}) => this.client.get${res}(this.url${params})`
    }

    if(method === 'post' && !thereIsAFormData) {
      return `
  ${jsDoc}
  post = (${req}) => this.client.post${res}(this.url${reqBody})`
    }

    if(method === 'put' && !thereIsAFormData) {
      return `
  ${jsDoc}
  put = (${req}) => this.client.put${res}(this.url${reqBody})`
    }

    if(method === 'patch' && !thereIsAFormData) {
      return `
  ${jsDoc}
  patch = (${req}) => this.client.patch${res}(this.url${reqBody})`
    }

    if(method === 'delete') {
      return `
  ${jsDoc}
  delete = (${req}) => this.client.delete${res}(this.url${reqBody})`
    }

    /* ------------ FORM DATA ------------ */ 

    if(method === 'post' && thereIsAFormData) {
      return `
  ${jsDoc}
  post = (req: PostFormData) => {
    ${formDataCode}
    return this.client.post${res}(this.url, formData)
  }`
    }

    if(method === 'put' && thereIsAFormData) {
      return `
  ${jsDoc}
  put = (req: PutFormData) => {
    ${formDataCode}
    return this.client.put${res}(this.url, formData)
  }`
    }

    if(method === 'patch' && thereIsAFormData) {
      return `
  ${jsDoc}
  patch = (req: PatchFormData) => {
    ${formDataCode}
    return this.client.patch${res}(this.url$, formData)
  }`
    }
  })
  .join('\n')
}