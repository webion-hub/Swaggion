export function getFormData(methodOpts: any, folderPath: string, method: string) {
  const folderPathPrep = folderPath
    .replace('api', '')
    .split('/')
    .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')

  const properties = methodOpts
    .requestBody
    ?.content?.['multipart/form-data']
    ?.schema
    ?.properties

  const thereIsAFormData = properties !== undefined
  const propertiesArray = Object.entries(properties ?? {})
  
  const code = `const formData = new FormData();
    ${
      propertiesArray.map(([key, value]: [string, any]) => {
        if(value.type === 'array') {
          return `req.${key}.forEach((item: any) => {
      formData.append('${key}', item);
    })`
        }

        return `formData.append('${key}', req.${key})`
      })
      .join(',\n\t\t')
    }
  `

  const methodPrep = method.charAt(0).toUpperCase() + method.slice(1)

  return {
    code,
    thereIsAFormData,
    interfaceName: `${folderPathPrep}${methodPrep}FormData`,
  }
}