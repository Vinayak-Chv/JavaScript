//Same as forEach but returns a new Array

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(square));
console.log(numbers.map(cube))

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

//2nd Example

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

console.log(students.map(uppercase));
console.log(students.map(lowercase));

function uppercase(element) {
    return element.toUpperCase();
}

function lowercase(element) {
    return element.toLowerCase();
}

//3rd Example

const dates = ["2024-1-10", "2025-2-28", "2026-3-30"];

console.log(dates.map(formatDates));

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]} / ${parts[1]} / ${parts[0]}}`;
}