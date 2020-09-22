/**
 * Retourne le moment de la journée en fonction de l'heure.
 * Retourne "dawn" (aube) entre 5h et 8h
 * Retourne "day" (jour) entre 9h et 17h
 * Retourne "dusk" (crepuscule) entre 18h et 21h
 * Retourne "night" (nuit) entre 22h et 4h
 */
export default function hoursToTimeOfDay(hours) {
  console.log(hours);
  return 'day';
}
