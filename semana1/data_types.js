// In JavaScript, types are categories of data that determine what kind of value something can hold and how it can be used.
// The main types are:

// Number: for numeric values
let numberExample1 = 5;
let numberExample2 = 3.14;

// String: for text
let stringExample1 = "hello";
let stringExample2 = 'world';

// Boolean: for true/false values
let booleanExample1 = true;
let booleanExample2 = false;

// Object: for complex data structures
let objectExample = { name: "Alice", age: 25 };

// Undefined: for variables that have been declared but not assigned a value
let undefinedExample;
undefinedExample = 10; // Just to show it's initially undefined

// Null: for intentionally non-existing values
let nullExample = null;

// Symbol: for unique identifiers
let symbolExample = Symbol("uniqueIdentifier");

// BigInt: for large integers beyond the safe integer limit
let bigIntExample = BigInt(1234567890123456789012345678901234567890n);


// Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.33
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000

// Comparison Operators
let x = 10;
let y = 20;
console.log(x == y); // Equal to: false
console.log(x === y); // Strict equal to: false
console.log(x != y); // Not equal to: true
console.log(x !== y); // Strict not equal to: true
console.log(x > y); // Greater than: false
console.log(x < y); // Less than: true
console.log(x >= y); // Greater than or equal to: false
console.log(x <= y); // Less than or equal to: true

// Logical Operators
let p = true;
let q = false;
console.log(p && q); // AND: false
console.log(p || q); // OR: true
console.log(!p); // NOT: false

// Assignment Operators
let z = 10;
z += 5; // Equivalent to z = z + 5; Result: 15
z -= 3; // Equivalent to z = z - 3; Result: 12
z *= 2; // Equivalent to z = z * 2; Result: 24
z /= 4; // Equivalent to z = z / 4; Result: 6
z %= 5; // Equivalent to z = z % 5; Result: 1
z **= 3; // Equivalent to z = z ** 3; Result: 1

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Result: "Yes"