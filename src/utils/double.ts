export default function double(array: any[]) {
  let r: any[] = [];
  array.map((item: any) => {
    r.push(item);
    r.push(item);
  });

  return r;
}
