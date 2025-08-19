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

// Fix 1: Use Number() for explicit type conversion
let result = Number("5") - 2; // Converts "5" to number 5 before subtraction
console.log("The result is: " + result); // Output: The result is: 3

// Fix 2: Convert a string "false" to an actual boolean value
// Boolean("false") is true because it's a non-empty string
// Instead, compare the string directly to "true" if you expect a string-based boolean
let isValid = "false" === "true"; // Only true if the string is exactly "true"
if (isValid) {
    console.log("This is valid!");
}

// Fix 3: Convert age from string to number before addition
let age = "25";
let totalAge = Number(age) + 5; // Converts "25" to 25, then adds 5 => 30
console.log("Total Age: " + totalAge); // Output: Total Age: 30
