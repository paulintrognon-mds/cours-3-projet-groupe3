import isPrime from './isPrime';

/**
 * Cette fonction retourne sous la forme d'un tableau les facteurs d'un nombre donné.
 * Par exemple, 15 retournera [3, 5] car 15 = 3 x 5
 * Par exemple, 84 retournera [2, 2, 3, 7] car 84 = 2 x 2 x 3 x 7
 * Pour ce faire, la fonction va parcourir tous les nombres premiers inférieurs au nombre donné.
 * Si le nombre donné est divisible par un de ces nombres premiers, on ajoute ce nombre aux facteurs,
 * et on divise le nombre donné par ce facteur, puis on recommence, jusqu'à ce que le reste de la
 * division soit égal à 1.
 */
export default function getPrimeFactors(number) {
  /**
   * En dessous de 4, on a que des nombres premiers.
   * On ne retourne donc qu'un seul facteur, lui même.
   */
  if (number <= 3) {
    return [number];
  }

  // primeFactors stockera les différents facteurs à retourner
  const primeFactors = [];

  // factor représente le facteur premier à chercher dans le nombre.
  // On commence à 2, le plus petit nombre premier possible
  let factor = 2;

  // reminder est le reste de la division entre le nombre donné et le(s) facteur(s) trouvé(s)
  // La fonction s'arrête quand reminder devient égal à 1
  let reminder = number;

  /**
   * Tant que le reste n'est égal à pas 1, on cherche des facteurs pour le diviser.
   */
  while (reminder !== 1) {
    // Si le reste est divisible par un facteur...
    if (reminder % factor === 0) {
      // Alors on ajoute ce facteur à la liste
      primeFactors.push(factor);
      // Et on divise le reste par ce facteur.
      reminder = reminder / factor;
    }
    // Si le reste n'est pas divisible par le facteur, on passe au facteur suivant.
    else {
      // On calcule le facteur suivant.
      let nextFactorCandidate = factor + 1;
      // Tant que le nombre candidat pour être le prochain facteur n'est pas premier, on continue à chercher.
      while (!isPrime(nextFactorCandidate)) {
        nextFactorCandidate++;
      }
      // Si on arrive ici c'est que nextFactorCandidate est premier. Il devient le prochain facteur.
      factor = nextFactorCandidate;
    }
  }

  // On retourne la liste des facteurs trouvés.
  return primeFactors;
}
