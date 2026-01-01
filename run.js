/**
 * Logic to separate Even and Odd numbers from an array
 */

const numbers = [12, 5, 8, 130, 44, 9, 17, 22, 3, 12, 8, 9];

// 1. Separate Even numbers (Divisible by 2)
const evenNumbers = numbers.filter((num) => num % 2 === 0);
let number = 0;
const addEven = evenNumbers.map((num) => {
  number = number + num;
  return number;
});
// 2. Separate Odd numbers (Not divisible by 2)
const oddNumbers = numbers.filter((num) => num % 2 !== 0);

// Output the results
console.log("Original Array:", numbers);
console.log("add even", number);

console.log("Even Numbers ✅:", evenNumbers);
console.log("Odd Numbers  ❌:", oddNumbers);

// Optional: A more efficient way using .reduce() to do it in one pass
const separated = numbers.reduce(
  (acc, num) => {
    num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
    return acc;
  },
  { even: [], odd: [] }
);

console.log("---------------------------");
console.log("Separated Object:", separated);

const findDuplicates = (arr) => {
  const seen = [];
  const duplicates = [];

  arr.forEach((num) => {
    const find = seen.find((item) => item === num);
    if (find) {
      duplicates.push(num);
    } else {
      seen.push(num);
    }
  });

  return duplicates;
};

console.log(findDuplicates(numbers));

const findDuplicate = (arr) => {
  const duplicates = [];

  arr.forEach((num) => {
    const result = arr.filter((number) => number === num);
    duplicates.push(num, result.length);
  });

  return duplicates;
};

console.log(findDuplicate(numbers));
