export default function toBinary(number) {
  const numbers = [];
  while (number > 0) {
    numbers.push(number % 2);
    number = Math.floor(number / 2);
  }
  return numbers.reverse().join('');
}
