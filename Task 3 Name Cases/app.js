var MyName = "Fahad uLLah siddiqui AHMed ALi";
//print in lowercase
console.log("lowercase: ".concat(MyName.toLowerCase()));
// print in UpperCase
console.log("UpperCase: ".concat(MyName.toUpperCase()));
// print on Title case
console.log("TitleCase: ".concat(MyName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));
