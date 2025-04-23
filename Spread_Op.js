//Opening the box and taking all the elements from the box. Expands it

let num = [1,2, 3, 4, 5];
let max = Math.max(...num);
let min = Math.min(...num);

let username = "Vinayak Chavan"
let letters = [...username].join("-");

let fruits = ["Apple", "Orange", "Banana"];
let vegetables = ["Carrots", "Celery", "Potatoes"];
let foods = [...fruits, ...vegetables, "Eggs", "Milk"];

console.log(num);
console.log(letters);
console.log(foods);