import _ from "lodash"


export function createInterfaceFromFormDataSchema(opts: { schema?: any, interfaceName: string, fullPath: string }): string {
  const schema = opts.schema

  if(!schema) {
    return ''
  }

  const content = createFromType({ schema, newInterfaces: [] })
  return `
export type ${opts.interfaceName} = ${content.value}
`
}

export function createInterface(opts: { schemas?: any, interfaceName: string, fullPath: string }): string {
  const schema = opts.schemas[opts.fullPath]

  if(!schema) {
    return ''
  }
  

  const content = createFromType({ schema, newInterfaces: [] })
  
  const newInterfaces = _(content.newInterfaces)
    .uniq()
    .map(newInterface => createInterface({ 
      schemas: opts.schemas, 
      interfaceName: newInterface.split('.').pop() ?? '', 
      fullPath: newInterface 
    }))
    .join('\n')

  return `
export type ${opts.interfaceName} = ${content.value}
${newInterfaces}
`
}

function isNullable(schema: any) {
  return schema.nullable === true
}

function createFromType(opts: { schema: any, newInterfaces: string[] }): { value: string, newInterfaces: string[] } {
  const type = opts.schema.type

  if(type === 'object') {
    return createFromObject(opts)
  }

  if(type === 'string' && opts.schema.format === 'binary') {
    return createFromFile(opts)
  }

  if(type === 'string' && opts.schema.enum) {
    return createFromEnum(opts)
  }

  if(type === 'string') {
    return createFromString(opts)
  }

  if(type === 'integer') {
    return createFromInteger(opts)
  }

  if(type === 'number') {
    return createFromNumber(opts)
  }

  if(type === 'boolean') {
    return createFromBoolean(opts)
  }

  if(type === 'array') {
    return createFromArray(opts)
  }

  if(opts.schema['$ref']) {
    return createFromRef(opts)
  }

  return { value: 'any', newInterfaces: opts.newInterfaces }
}

function createFromObject(opts: { schema: any, newInterfaces: string[] }) {
  const properties = opts.schema.properties
  const entries = Object.entries(properties)

  const content = entries.map(([key, value]) => {
    const val = createFromType({ schema: value, newInterfaces: opts.newInterfaces })
    const isNullableValue = isNullable(value)

    return {
      value: 
`  readonly ${key}${isNullableValue ? '?' : ''}: ${val.value}`,
      newInterfaces: val.newInterfaces
    }
  })

  return { 
    value: `{
${content.map(v => v.value).join('\n')}
}`, 
    newInterfaces: content.reduce((acc, v) => [...acc, ...v.newInterfaces], opts.newInterfaces)
  }
}

function createFromArray(opts: { schema: any, newInterfaces: string[] }) {
  const items = opts.schema.items
  const val = createFromType({ schema: items, newInterfaces: opts.newInterfaces })

  return { value: `readonly ${val.value}[]`, newInterfaces: val.newInterfaces }
}

function createFromEnum(opts: { schema: any, newInterfaces: string[] }) {
  return { 
    value: opts.schema.enum.map((v: any) => `'${v}'`).join(' | '), 
    newInterfaces: opts.newInterfaces 
  }
}

function createFromString(opts: { schema: any, newInterfaces: string[] }) {
  return { value: 'string', newInterfaces: opts.newInterfaces }
}

function createFromFile(opts: { schema: any, newInterfaces: string[] }) {
  return { value: 'File', newInterfaces: opts.newInterfaces }
}

function createFromInteger(opts: { schema: any, newInterfaces: string[] }) {
  return { value: 'number', newInterfaces: opts.newInterfaces }
}

function createFromNumber(opts: { schema: any, newInterfaces: string[] }) {
  return { value: 'number', newInterfaces: opts.newInterfaces }
}

function createFromBoolean(opts: { schema: any, newInterfaces: string[] }) {
  return { value: 'boolean', newInterfaces: opts.newInterfaces }
}

function createFromRef(opts: { schema: any, newInterfaces: string[] }) {
  const ref = opts
    .schema['$ref']
    .replaceAll('#/components/schemas/', '')

  return { 
    value: ref.split('.').pop(), 
    newInterfaces: [...opts.newInterfaces, ref] 
  }
}