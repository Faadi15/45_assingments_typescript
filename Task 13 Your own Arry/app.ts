// 13.Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several example.
//  Use your list to print a series of statements about these items, such as
//  “I would like to own a Honda motorcycle.”

let transports: string[] = ["Suzuki motorcycle", "Tesla Cyber Truck", "Velektra Bike"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});