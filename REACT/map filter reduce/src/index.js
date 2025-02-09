import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const triplenumber = numbers.map(function (x) {
  return x * 3;
});
console.log(triplenumber);

//Filter - Create a new array by keeping the items that return true.

const Greaterthan = numbers.filter(function (num) {
  return num > 10;
});
console.log(Greaterthan);

//Reduce - Accumulate a value by doing something to each item in an array.

const sum = numbers.reduce(function (a, c) {
  return a + c;
});
console.log(sum);

//Find - find the first item that matches from an array.

const greaterThan10 = numbers.find(function (x) {
  return x > 10;
});

console.log(greaterThan10);

//FindIndex - find the index of the first item that matches.

const greaterThan10Index = numbers.findIndex(function (x) {
  return x > 10 && x < 50;
});

console.log(greaterThan10Index);

var messageLimit100 = emojipedia.map(function (emojis) {
  return emojis.meaning.substring(0, 100);
});

console.log(messageLimit100);
