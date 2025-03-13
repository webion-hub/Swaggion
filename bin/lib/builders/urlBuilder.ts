
export function urlBuilder(isAnId: boolean, opts: { path: string[] }) {
  const url = [...opts.path].pop();

  return isAnId 
? `get url() {
    return \`/\${this.parent.url}/\${this.id}\`;
  }`
: `get url() {
    return \`/\${this.parent.url}/${url}\`;
  }`  
}
