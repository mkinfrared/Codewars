// https://www.codewars.com/kata/highest-and-lowest/train/typescript

export class Kata {
  static highAndLow(numbers: string) {
    const numArr: Array<number> = numbers.split(" ")
                                         .map(num => +num);

    const minNum: number = Math.min(...numArr);
    const maxNum: number = Math.max(...numArr);

    return `${maxNum} ${minNum}`;
  }
}

console.log(Kata.highAndLow("1 2 3 4 5"));
