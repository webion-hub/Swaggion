import { getContentStatus200Schema } from "../getContentStatus200Schema"
import { getRequestBody } from "../getRequestBody"
import fs from "fs";
import { createInterface, createInterfaceFromFormDataSchema } from "./createInterface";
import { getFormData } from "../getFormData";

export function createEndpointImports(opts: { openApiPathContent: any, folderPath: string, schemas: any }) {
  const entries = Object.entries(opts.openApiPathContent)
  const abstractionsExist = fs.existsSync(opts.folderPath + '/abstractions');
  
  if(!abstractionsExist) {
    fs.mkdirSync(opts.folderPath + '/abstractions');
  }

  return entries.map(([method, methodOpts]: [string, any]) => {
    const { 
      interfaceName: resInterfaceName,
      fullPath: resFullPath,
      thereIsContentStatus200Schema, 
    } = getContentStatus200Schema(methodOpts) 

    const { 
      interfaceName: reqInterfaceName,
      fullPath: reqFullPath, 
      thereIsRequestBodySchema,
    } = getRequestBody(methodOpts) 

    const {
      thereIsAFormData
    } = getFormData(methodOpts)

    const folderResPathExists = fs.existsSync(opts.folderPath + '/abstractions/res');
    const folderReqPathExists = fs.existsSync(opts.folderPath + '/abstractions/req');

    if(!folderResPathExists && thereIsContentStatus200Schema) {
      fs.mkdirSync(opts.folderPath + '/abstractions/res');
    }

    if(!folderReqPathExists && (thereIsRequestBodySchema || thereIsAFormData)) {
      fs.mkdirSync(opts.folderPath + '/abstractions/req');
    }
    
    if(thereIsContentStatus200Schema) {
      const content = createInterface({
        interfaceName: resInterfaceName,
        schemas: opts.schemas,
        fullPath: resFullPath
      })

      fs.writeFileSync(
        opts.folderPath + `/abstractions/res/${resInterfaceName}.ts`,
        content,
        "utf-8"
      );
    }

    if(thereIsRequestBodySchema) {
      const content = createInterface({
        interfaceName: reqInterfaceName,
        schemas: opts.schemas,
        fullPath: reqFullPath
      })

      fs.writeFileSync(
        opts.folderPath + `/abstractions/req/${reqInterfaceName}.ts`,
        content,
        "utf-8"
      );
    }

    const methodPrep = method.charAt(0).toUpperCase() + method.slice(1)
    const formDataInterfaceName = `${methodPrep}FormData`

    if(thereIsAFormData) {
      const content = createInterfaceFromFormDataSchema({
        interfaceName: formDataInterfaceName,
        fullPath: reqFullPath,
        schema: methodOpts
          .requestBody
          ?.content?.['multipart/form-data']
          ?.schema
      })

      fs.writeFileSync(
        opts.folderPath + `/abstractions/req/${formDataInterfaceName}.ts`,
        content,
        "utf-8"
      );
    }

    return [
      thereIsContentStatus200Schema && `import type { ${resInterfaceName} } from "./abstractions/res/${resInterfaceName}"`,
      thereIsRequestBodySchema && `import type { ${reqInterfaceName} } from "./abstractions/req/${reqInterfaceName}"`,
      thereIsAFormData && `import type { ${formDataInterfaceName} } from "./abstractions/req/${formDataInterfaceName}"`,
    ]
      .filter(Boolean)
      .join('\n')
  })
  .join('\n')
}