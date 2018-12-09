// https://www.codewars.com/kata/find-the-unique-number-1/train/typescript

export function findUniq(arr: Array<number>): number {
  console.log(arr);
  return arr.find((num: number, i: number, a: any) => {
    if (i === a.length - 2) {
      return !a.includes(num)
    }
    return !a.includes(num, i + 1)
  });
}

const test = [7, 7, 7, 7, 7, 7, 6, 7];

console.log(findUniq(test));

