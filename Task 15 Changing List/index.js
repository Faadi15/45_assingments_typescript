// Task 15. 
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
var guest = ["Ali", "Ahmed", "Kamran", "Waseem", "Zafar"];
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var unableToAttend = "Waseem";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Irfan";
guest[guest.indexOf(unableToAttend)] = newGuest;
// New invitations
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
