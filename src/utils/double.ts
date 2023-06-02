export default function double<T>(array: T[]): T[] {
  const r: T[] = [];
  array.map((item: T) => {
    r.push(item);
    r.push(item);
  });

  return r;
}
