const addUp = (a) => {
  let summ = 0;
  for (i = 1; i < a + 1; i++) {
    summ += i;
  }
  return summ;
};
console.log(addUp(4));

const cubed = (a, b, c) => {
  let cub = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
  return cub;
};
console.log(cubed(2, 5, 5));

const stringCheck = (a, b) => {
  if (b.startsWith(a, 0)) {
    return true;
  }
};
console.log(stringCheck(`bu`, `button`));

console.log("------------------------");

const lessEqual = (a) => {
  if (a <= 0) {
    return true;
  } else {
    return false;
  }
};
console.log(lessEqual(-8));

const occurences = (a, b) => {
  return a.split(b).length - 1;
};
console.log(occurences(`anana`, `a`));

const xToX = (a) => {
  if (a > 0) {
    return Math.pow(a, a);
  }
};
console.log(xToX(5));

const dogYearsAge = (a) => {
  let dogAge = a * 7;
  return `Your doggo is ${dogAge} years old in dog years!`;
};
console.log(dogYearsAge(4));

const katjesForIzabela = (a, b, c) => {
  return (c - a) * 365 * b;
};
console.log(katjesForIzabela(40, 3, 97));

//9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

const whereIsWaldo = (string) => string.includes(`Waldo`);
console.log(whereIsWaldo(`I found you Waldo!`));

console.log("---------------------------");

/* const isEqualSlices = (totalSlice, recipients, sliceForPerson) => {
  sliceForPerson = totalSlice % recipients >= 1 ? true : false;
  return sliceForPerson;
};
console.log(isEqualSlices(2, 3, 3));
 */

const isEqualSlices = (totalSlice, recipients, sliceForPerson) => {
  const howMany = sliceForPerson * recipients;
  return howMany <= totalSlice ? true : false;
};
console.log(isEqualSlices(2, 3, 3));

//12. isPrime?

const isPrime = (a) => {
  return a % a === 0 && a % 1 === 0 && a % 2 !== 0;
};
console.log(isPrime(91));

//11. XO

const xo = (string) => {
  const lowerString = string.toLowerCase();
  const oCounter = lowerString.split(`o`).length - 1;
  const xCounter = lowerString.split(`x`).length - 1;
  return oCounter === xCounter;
};
console.log(xo(`zpzp`));
