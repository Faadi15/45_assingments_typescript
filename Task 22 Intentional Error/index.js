// Task 22 
// Intentional Error: If you haven’t received an array index error in one of your programs yet,
//  try to make one happen. Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.
var friends = ["Ali", "Ahmed", "Farhan", "Naeem", "Waseem"];
console.log(friends[5]), // Intentional error: Arrays are zero-indexed, so index 5 is out of bounds.
    // Correcting the error by accessing a valid index. Now 0 is Ali and 4 is Waseem
    console.log(friends[4], " Now the eror is resolve by putting right number");
console.log(friends);
