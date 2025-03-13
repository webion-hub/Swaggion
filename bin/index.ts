import { program } from "commander";
import fs from "fs";
import path from "path";
import { createPartialPath } from "./lib/builders/createPartialPath";
import { createRootFile } from "./lib/builders/createRootFile";
import { fillFile } from "./lib/builders/fillFile";
import { ROOT } from "./lib/data";

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-f, --file <path>", "Specify a JSON file to read")
  .action((options) => {
    if (options.file) {
      try {
        const filePath = path.resolve(options.file);
        const data = fs.readFileSync(filePath, "utf-8");
        const openapi = JSON.parse(data);

        const title = openapi.info?.title;

        if (!title) {
          console.error("Error: Missing 'info.title' in JSON file.");
          process.exit(1);
        }

        const rootPath = createRootFile({ name: title });

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
              .filter(Boolean);

            splittedPath
              .forEach((_, index) => {
                const isFirst = index === 0;
                const partialPath = splittedPath.slice(index);
                const initialPartialPath = splittedPath.slice(0, index);

                const root = [ROOT].concat(initialPartialPath);

                if (isFirst) {
                  fillFile(rootPath, splittedPath[0]);
                }
                
                createPartialPath({
                  isLast: index === splittedPath.length - 1,
                  paths: partialPath,
                  root: root,
                  openApiPathContent,
                  schemas: openapi.components?.schemas,
                });
              })

          });
      } catch (error) {
        console.error("Error reading the JSON file:", (error as any).message);
      }
    }
  });

program.parse(process.argv);
