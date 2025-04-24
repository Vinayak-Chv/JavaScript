const hello = (name, age) => {console.log(`Hello! ${name}`)
                        console.log(`You're ${age} Years Old`)};

hello("Vinayak", 19);

//2nd Example

setTimeout( () => console.log(`Welcome!!`), 3000);

//3rd Example

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.map((element) => Math.pow(element, 2)));
console.log(numbers.map((element) => Math.pow(element, 3)));
console.log(numbers.filter((element) => element % 2 === 0));
console.log(numbers.filter((element) => element % 2 !== 0));
console.log(numbers.reduce((accumulator ,element) => accumulator + element));