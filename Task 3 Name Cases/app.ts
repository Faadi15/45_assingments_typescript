let MyName: string = "Fahad uLLah siddiqui";

//print in lowercase

console.log(`lowercase: ${MyName.toLowerCase()}`);

// print in UpperCase

console.log(`UpperCase: ${MyName.toUpperCase()}`);

// print on Title case

console.log(`TitleCase: ${MyName.replace(/\b\w/g,c=> c.toUpperCase())}`);