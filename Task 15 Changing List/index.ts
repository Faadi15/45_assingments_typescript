// Task 15. 
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.


let guest: string[] = ["Ali", "Ahmed", "Kamran", "Waseem","Zafar"];
guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
    });

let unableToAttend = "Waseem";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Irfan";
guest[guest.indexOf(unableToAttend)] = newGuest;

// New invitations
guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});