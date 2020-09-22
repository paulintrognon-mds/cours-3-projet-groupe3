import hoursToTimeOfDay from './hoursToTimeOfDay';

export default function getTimeOfDay() {
  const now = new Date(Date.now());
  const hours = now.getHours();
  return hoursToTimeOfDay(hours);
}
