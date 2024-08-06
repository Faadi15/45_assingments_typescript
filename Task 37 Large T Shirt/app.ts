// Task #37
// Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt (size: string = "large", message: string = "I love TypeScript") 
    {
        console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
    }
    make_shirt(); // Default large and message
    make_shirt("medium", "Dive into Coding."); // Default message, medium size
    make_shirt("small", "Be Happy!"); // Custom message, small size
                  