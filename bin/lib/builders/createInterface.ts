import _ from "lodash"

export function getEnumArrayName(name: string) {
  return name
    .split(/(?=[A-Z])/)
    .map(name => name.toUpperCase())
    .join('_')
}

export function createEnumArray(opts: { schema?: any, name: string }) {
  const isEnum = opts.schema.type === 'string' && opts.schema.enum

  if(!isEnum) {
    return ''
  }

  const name = getEnumArrayName(opts.name)
  return `export const ${name} = [${opts.schema.enum.map((v: any) => `'${v}'`).join(', ')}] as const`
} 

export function createInterfaceFromParamsSchema(opts: { parameters?: any, interfaceName: string }): string {
  const parameters = opts
    .parameters
    .filter((p: any) => p.in === 'query')

  if(!(parameters.length > 0)) {
    return ''
  }

  const parametersObj =  parameters.reduce((acc: any, p: any) => {
    const propertyName = p.name.charAt(0).toLowerCase() + p.name.slice(1)

    return {
      ...acc,
      [propertyName]: p.schema
    }
  }
  , {})

  const content = createFromType({ 
    schema: {
      type: 'object',
      properties: parametersObj
    }, 
    newInterfaces: [],
    interfaceName: opts.interfaceName
  })
  return `
export type ${opts.interfaceName} = ${content.value}`
}

export function createInterfaceFromFormDataSchema(opts: { schema?: any, interfaceName: string }): string {
  const schema = opts.schema

  if(!schema) {
    return ''
  }

  const content = createFromType({ schema, newInterfaces: [], interfaceName: opts.interfaceName })
  return `
${createEnumArray({ schema: opts.schema, name: opts.interfaceName })}
export type ${opts.interfaceName} = ${content.value}`
}

export function createInterface(opts: { schemas?: any, interfaceName: string, fullPath: string, notDeep?: boolean }): string {
  const schema = opts.schemas[opts.fullPath]

  if(!schema) {
    return ''
  }

  const content = createFromType({ schema, newInterfaces: [], interfaceName: opts.interfaceName })
  
  const newInterfaces = _(content.newInterfaces)
    .uniq()
    .map(newInterface => createInterface({ 
      schemas: opts.schemas, 
      interfaceName: newInterface.split('.').pop() ?? '', 
      fullPath: newInterface,
      notDeep: opts.notDeep
    }))
    .join('\n')

  return `
${createEnumArray({ schema: schema, name: opts.interfaceName })}
export type ${opts.interfaceName} = ${content.value}
${opts.notDeep ? '' : newInterfaces }`
}

function isNullable(schema: any) {
  return schema.nullable === true
}

function createFromType(opts: { schema: any, interfaceName: string, newInterfaces: string[] }): { value: string, newInterfaces: string[] } {
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

function createFromObject(opts: { schema: any, newInterfaces: string[], interfaceName: string }) {
  const properties = opts.schema?.properties
  
  if(!properties) {
    return { value: 'any', newInterfaces: opts.newInterfaces }
  }
  
  const entries = Object.entries(properties)

  const content = entries.map(([key, value]) => {
    const val = createFromType({ schema: value, newInterfaces: opts.newInterfaces, interfaceName: opts.interfaceName })
    const isNullableValue = isNullable(value)

    const schema = value as any

    const format = schema.format ? `Format ${schema.format}` : ''
    const maxLength = schema.maxLength ? `Max length ${schema.maxLength}` : ''
    const minLength = schema.minLength ? `Min length ${schema.minLength}` : ''
  
    const comment = [format, maxLength, minLength]
      .filter(x => x)
      .join(', ')

    const jsDoc = comment ? `\t/** ${comment} */\n` : ''

    return {
      value: 
`${jsDoc}\treadonly ${key}${isNullableValue ? '?' : ''}: ${val.value}`,
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

function createFromArray(opts: { schema: any, newInterfaces: string[], interfaceName: string }) {
  const items = opts.schema.items
  const val = createFromType({ schema: items, newInterfaces: opts.newInterfaces, interfaceName: opts.interfaceName })

  const name = val
    .value
    .replaceAll('+', '')
    .replaceAll('-', '')

  return { value: `readonly ${name}[]`, newInterfaces: val.newInterfaces }
}

function createFromEnum(opts: { schema: any, newInterfaces: string[], interfaceName: string }) {
  const name = getEnumArrayName(opts.interfaceName)
  
  return { 
    value: `typeof ${name}[number]`, 
    newInterfaces: opts.newInterfaces 
  }
}

function createFromString(opts: { schema: any, newInterfaces: string[] }) {
  return { value: `string`, newInterfaces: opts.newInterfaces }
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