// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

function countPositivesSumNegatives(input: Array<number>): Array<number> {
  if (!input ||input.length === 0) {
    return [];
  }

  const positives = input.filter((elem: number) => elem >= 0).length;

  const negatives = input.filter((elem: number) => elem < 0)
                         .reduce((acc, cv) => acc + cv, 0);

  return [positives, negatives]
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, 'hello'];

console.log(countPositivesSumNegatives(null));