import { getContentStatus200Schema } from "../getContentStatus200Schema"
import { getRequestBody } from "../getRequestBody"
import fs from "fs";
import { createInterface } from "./createInterface";

export function createEndpointImports(opts: { openApiPathContent: any, folderPath: string, schemas: any }) {
  const entries = Object.entries(opts.openApiPathContent)
  fs.mkdirSync(opts.folderPath + '/abstractions');

  return entries.map(([_, methodOpts]: [string, any]) => {
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

    const folderResPathExists = fs.existsSync(opts.folderPath + '/abstractions/res');
    const folderReqPathExists = fs.existsSync(opts.folderPath + '/abstractions/req');

    if(!folderResPathExists && thereIsContentStatus200Schema) {
      fs.mkdirSync(opts.folderPath + '/abstractions/res');
    }

    if(!folderReqPathExists && thereIsRequestBodySchema) {
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

    return [
      thereIsContentStatus200Schema && `import { ${resInterfaceName} } from "./abstractions/res/${resInterfaceName}"`,
      thereIsRequestBodySchema && `import { ${reqInterfaceName} } from "./abstractions/req/${reqInterfaceName}"`,
    ].filter(Boolean).join('\n')
  })
  .join('\n')
}