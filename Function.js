function happyBirthday(username,age) {
    console.log("Happy Birthday to You!!");
    console.log("Happy Birthday to You!!");
    console.log(`Happy Birthday ${username} You!!`);
    console.log("Happy Birthday to You!!");
    console.log(`You're ${age} years Old`);
}

happyBirthday("Vinayak", 18);

console.log("\n");

// Return Keyword

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function isEven(num) {
    return num % 2 === 0 ? true : false
}

function isValid(email) {
    // if(email.includes("@")) {
    //     return true
    // }
    // else {
    //     return false
    // }

    return email.includes("@") ? true : false;
}

console.log(isEven(6))
console.log(isValid("vinayak@gmail.com"))