let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(cube);

function double(element, index, array) {
    array[index] = element * 2;
}

function square(element, array, index) {
    array[index] = Math.pow(element, 2);
}

function cube(element, array, index) {
    array[index] = Math.pow(element, 3);
}

function display(element) {
    console.log(element);
}

//2nd Example

let fruits = ["Apple", "Orange", "Banana", "Coconut"];

console.log(fruits.forEach(display));
console.log(fruits.forEach(uppercase));
console.log(fruits.forEach(lowercase));
console.log(fruits.forEach(capitalize));

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}