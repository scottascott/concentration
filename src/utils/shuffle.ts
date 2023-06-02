export default function shuffle<T>(array: (T | undefined)[]): T[] {
  const newArray = [...array]; // Create a copy of the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]] as [
      T | undefined,
      T | undefined
    ];
  }

  return newArray as T[];
}
