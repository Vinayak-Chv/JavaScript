//1st Example
let a = 2, b = 3;

console.log(`Before Swapping A: ${a} and B: ${b}`);

[a, b] = [b, a];

console.log(`After Swapping A: ${a} and B: ${b}`);

console.log("------------------------");

//2nd Example

const colors = ["Red", "Green", "Blue", "Black", "White"];

console.log(`Before Swapping Colors: ${colors}`);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(`After Swapping Colors: ${colors}`);

console.log("------------------------");

//3rd Example(Same Colors used in the 2nd Example)

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(`First Color: ${firstColor} \nSecond Color: ${secondColor} \nThird Color: ${thirdColor}`);
console.log(`Extra Colors: ${extraColors}`);

console.log("------------------------");

//4th Example

const person1 = {
    firstName: "Johan",
    lastName: "Liebert",
    age: 20,
}

const person2 = {
    firstName: "Kenzo",
    lastName: "Tenma",
    age: 35,
    job: "Neurosurgeon"
}

//You Can Set job = "Unemployed" as a default value to both 4th and 5th Example but when certain key-value pair is not defined
const {firstName, lastName, age, job} = person2;

console.log(`Person 1 Details: \nFirst Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nJob: ${job}`);

console.log("------------------------");

//5th Example(Same Persons used in the 4th Example)

function displayPerson({firstName, lastName, age, job = "Unemployed"}) {
    console.log(`Person 1 Details: \nName: ${firstName} ${lastName} \nAge: ${age} \nJob: ${job}`);
}

displayPerson(person1);