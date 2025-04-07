import { getContentStatus200Schema } from "../getContentStatus200Schema"
import { getRequestBody } from "../getRequestBody"
import fs from "fs";
import { createInterface, createInterfaceFromFormDataSchema, createInterfaceFromParamsSchema } from "./createInterface";
import { getFormData } from "../getFormData";
import { getQueryParams } from "../getQueryParams";
import { tryCreateFile } from "../../tryCreateFile";
import { ROOT } from "../data";

export function createEndpointImports(opts: { openApiPathContent: any, folderPath: string, schemas: any }) {
  const entries = Object.entries(opts.openApiPathContent)

  const deepLevel = opts
    .folderPath
    .split('/')
    .length - 1

  const importPath = Array(deepLevel)
    .fill('..')
    .join('/')
    + '/type'

  return entries.map(([method, methodOpts]: [string, any]) => {
    const { 
      interfaceName: resInterfaceName,
      thereIsContentStatus200Schema, 
    } = getContentStatus200Schema(methodOpts) 

    const { 
      interfaceName: reqInterfaceName,
      thereIsRequestBodySchema,
    } = getRequestBody(methodOpts) 

    const {
      interfaceName: formDataInterfaceName,
      thereIsAFormData
    } = getFormData(methodOpts, opts.folderPath, method)

    const { 
      interfaceName: queryInterfaceName,
      thereAreQueryParams, 
    } = getQueryParams(methodOpts, opts.folderPath, method)

    if(thereIsAFormData) {
      const content = createInterfaceFromFormDataSchema({
        interfaceName: formDataInterfaceName,
        schema: methodOpts
          .requestBody
          ?.content?.['multipart/form-data']
          ?.schema
      })

      tryCreateFile(ROOT + '/index.ts', {
        onCreate: () => 'export type { ' + formDataInterfaceName + ' } from \'./type\'',
        onWrite: (old) => old + '\n' + 'export type { ' + formDataInterfaceName + ' } from \'./type\''
      })

      tryCreateFile(ROOT + '/type.ts', {
        onCreate: () => content,
        onWrite: (old) => old + '\n' + content
      })
    }

    if(thereAreQueryParams) {
      const content = createInterfaceFromParamsSchema({
        interfaceName: queryInterfaceName,
        parameters: methodOpts.parameters
      })

      tryCreateFile(ROOT + '/index.ts', {
        onCreate: () => 'export type { ' + queryInterfaceName + ' } from \'./type\'',
        onWrite: (old) => old + '\n' + 'export type { ' + queryInterfaceName + ' } from \'./type\''
      })

      tryCreateFile(ROOT + '/type.ts', {
        onCreate: () => content,
        onWrite: (old) => old + '\n' + content
      })
    }


  return [
      thereIsContentStatus200Schema && `import type { ${resInterfaceName} } from "${importPath}"`,
      thereIsRequestBodySchema && `import type { ${reqInterfaceName} } from "${importPath}"`,
      thereAreQueryParams && `import type { ${queryInterfaceName} } from "${importPath}"`,
      thereIsAFormData && `import type { ${formDataInterfaceName} } from "${importPath}"`,
    ]
      .filter(Boolean)
      .join('\n')
  })
  .join('\n')
}