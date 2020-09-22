/**
 * Calcule si un nombre est premier ou non
 * @param {number} number le nombre à tester
 * @returns {boolean} true si premier, false sinon
 */
export function computeIfIsPrime(number) {
  // Si le nombre est inférieur à 2, c'est forcément pas un nombre premier
  if (number < 2) {
    return false;
  }
  // Le nombre 2 est un nombre premier
  if (number === 2) {
    return true;
  }
  // Si le nombre est supérieur à 2, on cherche un diviseur
  for (let x = 2; x < number; x++) {
    // Si on trouve un diviseur, le nombre n'est pas premier
    if (number % x === 0) {
      return false;
    }
  }
  // Si on ne trouve pas de diviseur, le nombre est premier
  return true;
}
