// Task #29
// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favourute_fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
if (favourute_fruits.includes("Banana")) {
    console.log("Banana is your Favourite Fruit!");
}
if (favourute_fruits.includes("Apple")) {
    console.log("Yes Apple is your favourite Fruit!");
}
if (favourute_fruits.includes("Mango")) {
    console.log("Yes Mango is your favourite Fruit!");
}
if (favourute_fruits.includes("Orange")) {
    console.log("Yes Orange is your favourite Fruit!");
}
if (favourute_fruits.includes("Starawberries")) {
    console.log("Yes Grapes is your favourite Fruit!");
}
else
    (favourute_fruits.includes("Strawberries"));
console.log("Strawberries are not Available.");
