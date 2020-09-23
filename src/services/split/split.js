/**
 * Divise le texte "text" en plusieurs morceaux, selon la longueur donné par "length"
 * Exemples :
 *   split("12345678", 4) donne ["1234", "5678"]
 *   split("12345678", 2) donne ["12", "34", "56", "78"]
 */
export default function split(text, length) {
  // Si la longeur des morceaux est supérieur au texte lui même,
  // on peut retourner directement le texte en un seul morceau
  if (length > text.length) {
    return [text];
  }

  const output = [];

  for (let i = 0; i < text.length; i += length) {
    output[output.length] = text.slice(Math.max(text.length - i - length, 0), text.length - i);
  }

  return output.reverse();
}
