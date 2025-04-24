const hello = function() {
    console.log(`Hello`);
}

setTimeout(function() {
    console.log(`Hello!!`)
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.map(function (element) {
    return Math.pow(element, 2);
}));

console.log(numbers.map(function (element) {
    return Math.pow(element, 3);
}));

console.log(numbers.filter(function (element) {
    return element % 2 === 0;
}));

console.log(numbers.filter(function (element) {
    return element % 2 !== 0;
}));

console.log(numbers.filter(function (accumulator ,element) {
    return accumulator + element;
}));