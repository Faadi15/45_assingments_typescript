// Example 1
// Equality with strings
console.log("Testing equality with strings:");
console.log("mango" == "mango"); // True
// console.log("Apple" === "apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("StrawBerry".toLowerCase() == "strawberry"); // True
console.log("BanANa".toLocaleUpperCase() == "BANana"); // False
// Numerical tests
console.log("Numerical tests:");
console.log(50 > 5); // True
console.log(20 < 10); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
var cars = ["honda", "suzuki", "picanto", "alto"];
console.log("Is 'picanto' in cars?");
console.log(cars.includes("picanto")); // True
// Test whether an item is not in a array
console.log("Is 'toyota' in cars?");
console.log(cars.includes("toyota")); // False
