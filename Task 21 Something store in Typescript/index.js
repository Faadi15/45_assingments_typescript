"use strict";
// Task 21 They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var book = {
    name: "Rich Dad Poor Dad",
    Author: "Robert Kiyosaki",
    Launching_year: 1997
};
console.log(chalk_1.default.redBright("Book Inforamtion: ".concat(book.name, " Launch by ").concat(book.Author, ", published in year ").concat(book.Launching_year, ".")));
