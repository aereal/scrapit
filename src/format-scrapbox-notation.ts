export const formatScrapboxNotation = (url: string, title: string): string => {
  const {hostname} = new URL(url)
  const lines = [`#${hostname}`, `[${url} ${title}]`]
  return lines.join("\n")
}
