//Reduces the Array into a Single Value

const prices = [5, 30, 10, 25, 15, 20];

console.log(`$${prices.reduce(sum).toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}

//2nd Grades

const grades = [75, 50, 90, 80, 65, 95];

console.log(grades.reduce(getMax));
console.log(grades.reduce(getMin));

function getMax(accumulator, element) {
    return Math.max(accumulator, element)
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element)
}