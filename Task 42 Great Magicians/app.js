// Task #42
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
var magicians_name = ["Tom", "Bob", "Willamson"];
function show_magicians(magicians_name) {
    magicians_name.forEach(function (magicians_name) {
        console.log(magicians_name);
    });
}
show_magicians(["Hello"]);
function make_great(magicians_name) {
    for (var i = 0; i < magicians_name.length; i++) {
        magicians_name[i] = magicians_name[i] + " The Great";
    }
}
make_great(magicians_name); // Modifies the original array
