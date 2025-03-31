export function getRequestBody(methodOpts: any) {
  const requestBodySchemaPath = methodOpts
    .requestBody
    ?.content?.['application/json']
    ?.schema?.['$ref']
    ?.replaceAll('#/components/schemas/', '')

  const thereIsRequestBodySchema = requestBodySchemaPath !== undefined
  const interfaceName = thereIsRequestBodySchema && requestBodySchemaPath
    .replace('+', '')
    .split('.')
    .pop()

  return {
    thereIsRequestBodySchema,
    interfaceName,
    fullPath: requestBodySchemaPath,
  }
}