"use strict";
let guests = ["Fahad", "Ali", "Kamran", "Waseem", "Naeem"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Ahmed");
guests.push("Zafar");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
