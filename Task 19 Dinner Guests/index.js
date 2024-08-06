"use strict";
let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
