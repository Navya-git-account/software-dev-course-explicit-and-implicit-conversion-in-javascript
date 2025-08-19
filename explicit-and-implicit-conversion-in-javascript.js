/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/*
let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
*/

// -------------------
// Task 1: Debug and Fix Code
// -------------------

// Fix 1: Use Number() for explicit type conversion
let result = Number("5") - 2; // Converts "5" to number 5 before subtraction
console.log("The result is: " + result); // Output: The result is: 3

// Fix 2: Convert a string "false" to an actual boolean value
// Boolean("false") is true because it's a non-empty string
// Instead, compare the string directly to "true" if you expect a string-based boolean
let isValid = "false" === "true"; // Only true if the string is exactly "true"
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); // Will print because "false" !== "true"
}

// Fix 3: Convert age from string to number before addition
let age = "25";
let totalAge = Number(age) + 5; // Converts "25" to 25, then adds 5 => 30
console.log("Total Age: " + totalAge); // Output: Total Age: 30

// -------------------
// Task 2: Type Conversion Examples
// -------------------

// Implicit conversion of number to string during concatenation
let num = 10;
let text = "The number is " + num; // num is implicitly converted to string

console.log(text); // Output: "The number is 10"
console.log(typeof text); // Output: string

// Explicit conversion of a string to number
let value = "42";
let convertedValue = Number(value); // Explicitly convert string to number

console.log("Before conversion:", value, "| Type:", typeof value); 
// Output: "42" | string

console.log("After conversion:", convertedValue, "| Type:", typeof convertedValue); 
// Output: 42 | number

// Edge case: Undefined in Arithmetic (results in NaN)
let undefinedValue;
let edgeResult = undefinedValue + 5; // undefined + number = NaN

console.log("undefined + 5 =", edgeResult); // Output: NaN
console.log(typeof edgeResult); // Output: number

let explicitlyConverted = Number(undefinedValue); // Converts undefined to NaN
console.log("Number(undefined) =", explicitlyConverted); // Output: NaN


