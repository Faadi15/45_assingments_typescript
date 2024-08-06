// Task #41 
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let magicians_name :string[] = ["Tom", "Bob","Willson" ]
function show_magicians(magicians_name:string[]){
    magicians_name.forEach(magicians_name => {
        console.log(`Hello ${magicians_name}! to the magic World!`)
       
    }); 
}
show_magicians(magicians_name)
