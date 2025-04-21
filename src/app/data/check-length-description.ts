export const checkLength = (value: string) => (value.length < 100 ? value.padEnd(150, " ") : value)
