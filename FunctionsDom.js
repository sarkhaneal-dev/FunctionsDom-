function findEvenOdd(...nums) {
  let evens = [];
  let odds = [];

  for (let n of nums) {
    if (n % 2 === 0) evens.push(n);
    else odds.push(n);
  }

  return { evens, odds };
}

console.log(findEvenOdd(14, 20, 35, 40, 57, 60, 100));
console.log("");

function sumDivisible(arr) {
  let sum = 0;
  for (let n of arr) {
    if (n % 20 === 0) sum += n;
  }
  return sum;
}

console.log(sumDivisible([14, 20, 35, 40, 57, 60, 100]));
console.log("");

function countChar(str, ch) {
  let count = 0;
  for (let s of str) {
    if (s === ch) count++;
  }
  return count;
}

console.log(countChar("Salam qaqa necesən", "a"));