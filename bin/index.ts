import { program } from "commander";
import fs from "fs";
import path from "path";
import { createEndpointImports } from "./lib/builders/createEndpointImports";
import { createEndpoints } from "./lib/builders/createEndpoints";
import { createRootFile } from "./lib/builders/createRootFile";
import { ROOT } from "./lib/data";
import { firstLetterUpperCase } from "./lib/firstLetterUpperCase";
import { getPathName } from "./lib/getPathName";
import { tryToWrite } from "./lib/tryToWrite";
import { tryCreateFile } from "./tryCreateFile";
import { constructorBuilder } from "./lib/builders/constructorBuilder";
import { urlBuilder } from "./lib/builders/urlBuilder";
import { importsBuilder } from "./lib/builders/importsBuilder";
import { getterBuilder } from "./lib/builders/getterBuilder";

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-f, --file <path>", "Specify a JSON file to read")
  .option("-n, --name <name>", "Specify root file name")
  .action((options) => {
    if (options.file) {
      try {
        const filePath = path.resolve(options.file);
        const data = fs.readFileSync(filePath, "utf-8");
        const openapi = JSON.parse(data);

        const openApiTitle = openapi.info?.title;

        const rootPath = createRootFile({ 
          name: options.name ?? openApiTitle ?? 'Api' 
        });

        const paths = openapi.paths;
        if (!paths) {
          console.error("Error: Missing 'paths' in JSON file.");
          process.exit(1);
        }

        Object
          .entries(paths)
          .forEach(([apiPath, openApiPathContent]) => {
            const splittedPath = apiPath
              .split("/")
              .filter(Boolean)

            splittedPath
              .forEach((_, index) => {
                const isFirst = index === 0;

                const rawPartialPath = splittedPath.slice(0, index + 1);
                const partialPath = getPathName(rawPartialPath)
                const fullPartialPath = [ROOT, ...partialPath].join("/");
                
                const folderPathExists = fs.existsSync(fullPartialPath);

                if(!folderPathExists) {
                  fs.mkdirSync(fullPartialPath);
                }

                const folderName = getPathName([[...partialPath]?.pop() ?? ''])[0];
                const fileName = `${firstLetterUpperCase(folderName)}.ts`;
                const filePath = path.join(fullPartialPath, fileName);

                const isAnId = !!([...rawPartialPath].pop()?.includes("{"));
                const nextPart = splittedPath[index + 1];
                const isNextAnId = !!nextPart?.includes("{");
                
                if (isFirst) {
                  tryCreateFile(rootPath, {
                    onWrite: (oldContent) => {
                      const part = splittedPath[index];
                      const isAnId = !!part?.includes("{");


                      const contentWithImports = tryToWrite('IMPORTS', oldContent, importsBuilder({ part: part }))
                      const contentWithGetters = tryToWrite('SUB-PATHS', contentWithImports, getterBuilder(isAnId, { part: part, openApiPathContent }))

                      return contentWithGetters
                    }
                  });
                }

                tryCreateFile(filePath, {
                  onCreate: () => {
                    return `//#region IMPORTS
import { Endpoint } from "@webion/api";
import type { AxiosInstance } from "axios"
//#endregion

export class ${firstLetterUpperCase(folderName)} extends Endpoint {
  //#region CONSTRUCTOR
  ${constructorBuilder(isAnId, { openApiPathContent })}
  //#endregion

  //#region URL
  ${urlBuilder(isAnId, { path: rawPartialPath })}
  //#endregion

  //#region SUB-PATHS
  //#endregion

  //#region ENDPOINTS
  //#endregion
}
                    `
                  },
                  onWrite: (oldContent) => {
                    const currentPath = getPathName(apiPath.split('/')).join("/");
                    const iteratedPath = partialPath.join("/");

                    if(currentPath === iteratedPath) {
                      const contentWithImports = tryToWrite(
                          'IMPORTS', 
                          oldContent, 
                          '\n' + createEndpointImports({ 
                            openApiPathContent: openApiPathContent, 
                            folderPath: fullPartialPath, 
                            schemas: openapi.components?.schemas
                          })
                        )

                      const conentWithEndpoints = tryToWrite(
                          'ENDPOINTS',
                          contentWithImports,
                          createEndpoints({ 
                            openApiPathContent, 
                            rawPartialPath,
                            folderPath: fullPartialPath 
                          })
                        )

                      return conentWithEndpoints;
                    }

                    const contentWithImports = tryToWrite('IMPORTS', oldContent, importsBuilder({ part: nextPart }))
                    const contentWithGetters = tryToWrite('SUB-PATHS', contentWithImports, getterBuilder(isNextAnId, { part: nextPart, openApiPathContent }))

                    return contentWithGetters
                  }
                })
              })

          });
      } catch (error) {
        console.error("Error reading the JSON file:", (error as any).message);
      }
    }
  });

program.parse(process.argv);