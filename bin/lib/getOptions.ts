export function getOptions(methodOpts: any) {
  const isOctetStream = methodOpts
    .responses['200']
    ?.content?.['application/octet-stream']

  const thereIsOptions = isOctetStream

  const options = isOctetStream && `{ responseType: 'blob' }`

  return {
    thereIsOptions,
    options,
  }
}