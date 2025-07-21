

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.
Example: isAdult(21) should return 'Adult'.
Complete the exercise in the space below:*/

function isAdult(age) {
  let result;
  if (age>18) {
    result = 'Adult';
  } else {
    result = 'Minor'
  }
   return result;
  }
console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(17));
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:*/

function isCharAVowel(char) {
  if (char ==='a') {
    return true;
  } else if (char === 'e'){
    return true;
  } else if (char === 'i') {
    return true;
  } else if (char === 'o') {
    return true;
  } else if (char === 'u') {
    return true;
  } else {
    return false;
  }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("b"));
