// Task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Example 1
// Equality with strings
console.log("Testing equality with strings:");
console.log("mango" == "mango"); // True
// console.log("Apple" === "apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("StrawBerry".toLowerCase() == "strawberry"); // True
console.log("BanANa".toLocaleUpperCase()== "BANana")// False

// Numerical tests
console.log("Numerical tests:");
console.log(50 > 5); // True
console.log(20 < 10); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let cars = ["honda", "suzuki", "picanto", "alto"];
console.log("Is 'picanto' in cars?");
console.log(cars.includes("picanto")); // True

// Test whether an item is not in a array
console.log("Is 'toyota' in cars?");
console.log(cars.includes("toyota")); // False
              