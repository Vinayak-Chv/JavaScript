function sum(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }
    return result;
}

function getAvg(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

function combineString(...strings) {
    return strings.join(" ");
}

console.log(`Your Total is $${sum(1, 2, 3, 4, 5)}`);

console.log(`Your Average is ${75, 100, 85, 90, 50}`);

console.log(`Your Full Name is ${combineString("Mr.", "Vinayak", "Chavan", "3011")}`)