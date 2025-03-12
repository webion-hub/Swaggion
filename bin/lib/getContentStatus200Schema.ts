export function getContentStatus200Schema(methodOpts: any) {
  const contentStatus200SchemaPath = methodOpts
    .responses['200']
    ?.content?.['application/json']
    ?.schema?.['$ref']
    ?.replaceAll('#/components/schemas/', '')

  const thereIsContentStatus200Schema = contentStatus200SchemaPath !== undefined
  const interfaceName = thereIsContentStatus200Schema && contentStatus200SchemaPath
    .split('.')
    .pop()

  return {
    thereIsContentStatus200Schema,
    interfaceName,
    fullPath: contentStatus200SchemaPath,
  }
}