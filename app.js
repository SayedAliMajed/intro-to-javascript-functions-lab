

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
console.log('=================================================')
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
console.log('=================================================')
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
console.log('=================================================')
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


function generateEmail(name, domain) {
  return `${name}@${domain}`;
  
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log('=================================================')

function greetUser(name, time) {
  let greeting;

  switch (time) {
    case 'morning':
      greeting = `"Good morning, ${name}!"`;
      break;
    case 'afternoon':
      greeting = `"Good afternoon, ${name}!"`;
      break;
    case 'evening':
      greeting = `"Good evening, ${name}!"`;
      break;
    default:
      greeting = `"Hello, ${name}!"`;
  }

  return greeting;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('=================================================')
const maxOfThree = (numA,numB, NumC) => {
  return Math.max(numA, numB, NumC);
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('=================================================')

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (billAmount, tip) => {
   return (billAmount * (tip / 100)).toFixed(1);
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('=================================================')
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:}*/

const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
    return (temp * 9/5) + 32;
    } else if (scale === 'F') {
    return (temp - 32) * 5 / 9;
  } else {
    return 'Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.';
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('=================================================')

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
const basicCalculator = (num1, num2, operation) => {
 switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) return 'Error: Cannot divide by zero.';
      return num1 / num2;
    default:
      return 'Error: Invalid operation. Use add, subtract, multiply, or divide.';
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('=================================================')
/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
};

console.log('Exercise 10 Result:', calculateGrade(85));
console.log('=================================================')
/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (firstName, lastName) => {
  const firstPart = firstName.slice(0,3);
  const lastPart = lastName.slice(0,3);
  const totalLength = firstName.length + lastName.length;
  const username = `${firstPart}${lastPart}${totalLength}`;
  
  return username;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

console.log('=================================================')
/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
  return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4,));

console.log('=================================================')