export function getQueryParams(methodOpts: any, folderPath: string, method: string) {
  const folderPathPrep = folderPath
    .replace('api', '')
    .split('/')
    .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')

  const queryParams = methodOpts
    .parameters
    ?.filter((p: any) => p.in === 'query')

  const thereAreQueryParams = queryParams?.length > 0
  const methodPrep = method.charAt(0).toUpperCase() + method.slice(1)

  return {
    thereAreQueryParams,
    interfaceName: `${folderPathPrep}${methodPrep}QueryParams`,
  }
}