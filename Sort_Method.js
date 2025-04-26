let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

console.log(numbers.sort((a, b) => a - b)); //The Sort method only sort the String values not numbers so we have to the function explicitly

console.log("----------------");

//2nd Example

const people = [{name: "Thorfinn", age: 20, gpa: 3.0}, 
                {name: "Tanjiro", age: 23, gpa: 1.5}, 
                {name: "Tenma", age: 37, gpa: 3.0}, 
                {name: "Yuji", age: 22, gpa: 4.0}];

console.log(people.sort((a, b) => a.gpa - b.gpa));  //For Reverse you have to change b - a instead a - b and this is only use for numbers not for String

console.log(people.sort((a, b) => a.name.localeCompare(b.name)));   //This is to sort it by String