// Task #36
// T-Shirt: Write a function called make_shirt() 
// that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.
function t_shirt(size, message) {
    console.log("Making a ".concat(size, " size t-shirt with the message \"").concat(message, "\" printed on it."));
}
t_shirt("Large", "Be Happy!");
