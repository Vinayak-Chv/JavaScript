let age = 19;
let price = 10.99;
let gpa = 2.1;
let fullName = "Vinayak Chavan";
let isStudying = true;

console.log(`Age: ${age}`);
console.log(`Price: ${price}`);
console.log(`GPA: ${gpa}`);

console.log(`Datatype of Age: ${typeof age}`);  //To Check the Datatype
console.log(`Name: ${fullName}`);
console.log(`Are you Studing: ${isStudying}`);

document.getElementById("p1").textContent = `My Name is ${fullName}`;
document.getElementById("p2").textContent = `I'm ${age} years old`;
document.getElementById("p3").textContent = `Are you Studying Right Now: ${isStudying}`;