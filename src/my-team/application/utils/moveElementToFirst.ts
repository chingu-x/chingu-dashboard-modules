export function moveElementToFirst<T>(arr: T[], element: T): T[] {
  const index = arr.indexOf(element);
  if (index === -1) {
    return arr;
  }
  [arr[index], arr[0]] = [arr[0], arr[index]];
  return arr;
}
