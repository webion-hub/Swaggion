import { tryCreateFile } from "../../tryCreateFile";
import { createInterface } from "./createInterface";

function getNameFromKey(key: string) {
  return key
    .split('.')
    .pop()
    ?.replaceAll('+', '')
    ?.replaceAll('-', '')
    ?? ''
}

export function createAbstractions(components: any, path: string) {
  const entries = Object.entries(components.schemas);

  const abstractions = entries
    .map(([key]) => {
      const name = getNameFromKey(key)

      return createInterface({ 
        interfaceName: name,
        fullPath: key,
        schemas: components.schemas,
        notDeep: true
      })
    })
    .join('\n')

  const imports = entries
    .map(([key]) => {
      const name = getNameFromKey(key)

      return 'export type { ' + name + ' } from \'./type\''
    })
    .join('\n')

  tryCreateFile(path + '/type.ts', {
    onCreate: () => abstractions
  })

  tryCreateFile(path + '/index.ts', {
    onCreate: () => imports
  })
}