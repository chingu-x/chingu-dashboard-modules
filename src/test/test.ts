// random function, not actually going to be used (probably)

interface GenerateRandomNumbersProps {
  count: number;
  min: number;
  max: number;
}

export function generateRandomNumbers({
  count,
  min,
  max,
}: GenerateRandomNumbersProps) {
  if (count <= 0 || min > max) {
    throw new Error("Invalid arguments. Ensure count > 0 and min <= max.");
  }

  const numbers: number[] = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}
