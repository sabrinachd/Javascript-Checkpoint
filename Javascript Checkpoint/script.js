//Write a function that converts hours into seconds.
function howManySeconds(hours) {
  return hours * 3600;
}
const result = howManySeconds(2);
console.log(result);
//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
  return minutes * 60;
}
//Create a function that takes an array containing only numbers and return the first element
function getFirstValue(arr) {
  return arr[0];
}
const arr = [1, 2, 3];
const result = getFirstValue(arr);
console.log(result);

//Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
  return age * 365;
}
const result = calcAge(65);
console.log(result);
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function squared(b) {
  return b * b;
}
//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
  return (base * height) / 2;
}
const result = triArea(2, 3);
console.log(result);
//This is an introduction to how challenges on Edabit work
function hello() {
  return "hello edabit.com";
}
//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
  return voltage * current;
}
const result = circuitPower(230, 10);
console.log(result);
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
  return num <= 0;
}
const result = lessThanOrEqualToZero(5);
console.log(result);
//Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
  return (length + width) * 2;
}
const result = findPerimeter(6, 7);
console.log(result);
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
  return a * a * a;
}
const result = cubes(3);
console.log(result);

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
  return "something " + a;
}

const result = giveMeSomething("is better than nothing");
console.log(result);

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
  const totalPoints = 2 * twoPointers + 3 * threePointers;
  return totalPoints;
}
const result = points(1, 1);
console.log(result);
//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
  return (n - 2) * 180;
}
const result = sumPolygon(4);
console.log(result);

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}
const result = lessThan100(22, 10);
console.log(result);

//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
function nameString(name) {
  return name + "Edabit";
}
const result = nameString("Matt");
console.log(result);
//Write a function that takes an integer minutes and converts it to seconds
function convert(minutes) {
  return minutes * 60;
}
const result = convert(3);
console.log(result);
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
  return x % y;
}
const result = remainder(1, 3);
console.log(result);
//Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
function greeting(name) {
  if (name === "Mubashir") {
    return "Hello, my Love!";
  } else {
    return "Hello, " + name + "!";
  }
}
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function squared(a) {
  return a * a;
}
const result = squared(5);
console.log(result);
/*In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs*/
function animals(chickens, cows, pigs) {
  const chickenLegs = chickens * 2;
  const cowLegs = cows * 4;
  const pigLegs = pigs * 4;
  const totalLegs = chickenLegs + cowLegs + pigLegs;
  return totalLegs;
}
const result = animals(2, 3, 5);
console.log(result);

//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
  return num1 === num2;
}

const result = isSameNum(4, 8);
console.log(result);
//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

function footballPoints(wins, draws, losses) {
  const totalPoints = 3 * wins + draws * 1 + losses * 0;
  return totalPoints;
}
const result = footballPoints(3, 4, 2);
console.log(result);
//Fix the code in the Code tab so the function returns true if and only if x is equal to 7
function isSeven(x) {
  if (x == 7) {
    return true;
  } else {
    return false;
  }
}
const result = isSeven(3);
console.log(result);
//Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
  const trueValues = arr.filter((value) => value === true);
  return trueValues.length;
}

const result = countTrue([true, false, false, true, false]);
console.log(result);

//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
function numberSplit(number) {
  const half = Math.floor(number / 2);
  const leftHalf = half;
  const rightHalf = number - half;
  return [leftHalf, rightHalf];
}

//A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
//Create a function which calculates the amount of fuel it needs, given the distance.
function calculateFuel(distance) {
  const fuelNeeded = Math.max(10 * distance, 100);

  return fuelNeeded;
}

//Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
function error(n) {
  const errorMessages = {
    1: "Check the fan: e1",
    2: "Emergency stop: e2",
    3: "Pump Error: e3",
    4: "c: e4",
    5: "Temperature Sensor Error: e5",
  };
  if (errorMessages.hasOwnProperty(n)) {
    return errorMessages[n];
  } else {
    return 101;
  }
}
//Create a function that counts the integer's number of digits.
function count(n) {
  const digitCount = Math.abs(n).toString().length;
  return digitCount;
}
//An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
function isPositiveDominant(a) {
  const positiveValues = [...new Set(a.filter((num) => num > 0))];
  const negativeValues = [...new Set(a.filter((num) => num < 0))];

  return positiveValues.length > negativeValues.length;
}
