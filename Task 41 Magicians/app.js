"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task #41 
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
var chalk_1 = require("chalk");
var magicians_name = ["Tom", "Bob", "Willson"];
function show_magicians(magicians_name) {
    magicians_name.forEach(function (magicians_name) {
        console.log(chalk_1.default.blue("Hello ".concat(magicians_name, "! to the magic World!")));
    });
}
show_magicians(magicians_name);
