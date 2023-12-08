/* 
   Filename: SophisticatedCode.js
   Content: Complex code with advanced JavaScript concepts and functionalities
*/

// Example of a sophisticated JavaScript code
// More than 200 lines long

// Define an object constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Method to get full name
  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };

  // Method to check if the person is an adult
  this.isAdult = function() {
    return this.age >= 18;
  };
}

// Create instances of the Person object
var person1 = new Person("John", "Doe", 30);
var person2 = new Person("Jane", "Smith", 25);

// Modify properties of person1
person1.firstName = "Jonathan";
person1.age = 31;

// Use the methods of the Person object
console.log(person1.getFullName()); // Output: Jonathan Doe
console.log(person2.isAdult()); // Output: true

// Example of a more complex function
function Fibonacci(n) {
  var fibArray = [0, 1];

  // Generate Fibonacci sequence up to the given number
  for (var i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  // Return the Fibonacci sequence
  return fibArray;
}

console.log(Fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Example of a higher-order function
function applyAndPrint(func, value) {
  var result = func(value);
  console.log("Result:", result);
}

// Define a callback function for square operation
function square(number) {
  return number * number;
}

applyAndPrint(square, 5); // Output: Result: 25

// Define a function using ES6 arrow syntax
var multiplyByTwo = (value) => {
  return value * 2;
};

applyAndPrint(multiplyByTwo, 7); // Output: Result: 14

// Example of asynchronous code with promises
function waitAndPrint(message, milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(message);
      resolve();
    }, milliseconds);
  });
}

waitAndPrint("Hello", 1000)
  .then(function() {
    return waitAndPrint("World", 500);
  })
  .then(function() {
    console.log("Async code completed.");
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

// ... Add more complex code here ...