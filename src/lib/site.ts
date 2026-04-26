export function isPonyMode() {
  return import.meta.env.PONY === true || import.meta.env.PONY === "true";
}
