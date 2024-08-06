// Task 21 They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

 
let book: {name: string; Author: string; Launching_year: number} = {
    name: "Rich Dad Poor Dad",
    Author: "Robert Kiyosaki",
    Launching_year: 1997
};
console.log(`Book Inforamtion: ${book.name} Launch by ${book.Author}, published in year ${book.Launching_year}.`);