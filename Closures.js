//Function within function and inner function must call it in the outer function to get access to both functions
//It variable declared in the closure are treated as the private

function outer() {
    let message = "Hello";
    function inner() {
        console.log(message);
    }

    inner();
}

outer();

//2nd Example

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count Increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

//3rd Example

function createGame(params) {
    let score = 0

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore() {
        return score;
    }
    
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`Final Score: ${game.getScore()}pts`);