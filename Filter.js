//Filters the array according to the function

let numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.filter(isEven));
console.log(numbers.filter(isOdd));

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

//2nd Examples

const ages = [16, 17, 18, 18, 19, 20, 60];

console.log(ages.filter(isAdult));
console.log(ages.filter(isChild));

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}

//3rd Example

const words = ["Apple", "Orange", "Banana", "Kiwi", "Pomegranate", "Coconut"];

console.log(words.filter(getShortWords));
console.log(words.filter(getLongWords));

function getShortWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}