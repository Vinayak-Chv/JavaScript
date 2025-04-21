const fullName = "Bro Code";
const newName = "Broskii Code";

console.log(fullName.slice(0, 3))
console.log(fullName.slice(4, 8))   //You can Also right and recommeded as (4) in it

console.log(fullName.slice(0, 1))   //Give us the First Letter
console.log(fullName.slice(-1));    //The Last Letter as increasing -1 - -2 and all

// console.log(0, newName.indexOf(" "));    This step is easy to find out the index of which you have to print
console.log(newName.slice(0, 7));
console.log(newName.slice(8));


const email = "vinayak@gmail.com";

console.log(email.slice(0, email.indexOf("@")));
console.log(email.slice(email.indexOf("@") + 1));