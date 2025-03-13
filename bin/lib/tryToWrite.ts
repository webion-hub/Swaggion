export function tryToWrite(place: string, oldContent: string, newContent: string) {
  const alreadyExists = oldContent.includes(newContent);

  if(alreadyExists) {
    return oldContent;
  }

  return oldContent
    .replace(
`//#region ${place}`, 
`//#region ${place}${newContent}`
    )
}