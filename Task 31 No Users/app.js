// // TASK#31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Example 1
var usersnames = [];
if (usersnames.length === 0) {
    console.log("\n\"We need to find some users!\"\n");
}
// Example 2
var usernames2 = ["Fahad", "Saad", "Ubaid"];
if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames2.forEach(function (usernames2) {
        console.log("\nHello!".concat(usernames2, " Welcome Back!\n"));
    });
}
