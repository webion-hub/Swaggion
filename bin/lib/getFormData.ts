export function getFormData(methodOpts: any) {
  const properties = methodOpts
    .requestBody
    ?.content?.['multipart/form-data']
    ?.schema
    ?.properties

  const thereIsAFormData = properties !== undefined
  const propertiesArray = Object.entries(properties ?? {})
  
  const code = `const formData = new FormData();
    ${
      propertiesArray.map(([key]: [string, any]) => {
        return `formData.append('${key}', req.${key})`
      })
      .join(',\n\t\t')
    }
  `

  return {
    code,
    thereIsAFormData
  }
}