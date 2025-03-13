import fs from "fs";

export function tryCreateFile(
  path: string, 
  callbacks: { 
    onWrite?: (oldContent: string) => string, 
    onCreate?: () => string 
  }
){
  const exists = fs.existsSync(path);
  if(exists) {
    const content = fs.readFileSync(path, "utf-8");
    const newContent = callbacks.onWrite?.(content) ?? content;

    fs.writeFileSync(path, newContent ?? '');
    return
  }

  const content = callbacks.onCreate?.() ?? '';
  const newContent = callbacks.onWrite?.(content) ?? content;

  fs.writeFileSync(path, newContent ?? '');
}
