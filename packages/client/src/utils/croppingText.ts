export function croppingText(text: string, maxLength: number) {
  if (text.length < maxLength) return text;

  const sizeCropping = (maxLength / 2) - 1;

  return `${text.slice(0, sizeCropping)}…${text.slice(-sizeCropping)}`;
}
