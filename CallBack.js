//So there are so many functions so we have to give them a sequence to give that hello() after we have to execute goodbye() by giving the params as goodBye

function hello(callback) {
    console.log(`Hello!`);
    callback();
}

function leave() {
    console.log(`Leave!`);
}

function wait() {
    console.log(`Wait!`);
}

function goodBye() {
    console.log(`GoodBye!`);
}

hello(goodBye);

//2nd Example

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(`Addition of 2 Numbers is ${result}`);
}

sum(displayConsole, 2, 2);