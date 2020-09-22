export function getTimeOfDay() {
  const now = new Date(Date.now());
  const hours = now.getHours();
  return hoursToTimeOfDay(hours);
}

export function hoursToTimeOfDay(hours) {
  // Si il est entre 22h et 4h du matin, c'est la nuit
  if (hours >= 22 || hours <= 4) {
    return 'night';
  }
  // Entre 5h et 8h, c'est l'aube
  if (hours >= 5 && hours <= 8) {
    return 'dawn';
  }
  // Entre 19 et 21h, c'est le crépuscule
  if (hours >= 19 && hours <= 21) {
    return 'dusk';
  }
  // Entre 9h et 18h, c'est le jour
  return 'day';
}
