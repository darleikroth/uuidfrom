import uuid from "npm:uuid-by-string";

export function convert(input: string) {
  return uuid(input);
}

if (import.meta.main) {
  const s = Deno.args[0];
  if (!s) {
    console.warn("Please provide a string to convert");
    Deno.exit(1);
  }
  console.log(convert(s));
}
