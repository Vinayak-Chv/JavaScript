try {
    console.log(x)
} 

catch (error) {
    console.error(error);
}

finally {
    console.log("END!!");
}

// 2nd Example

try {
    const dividend = Number(window.prompt("Enter a Dividend?"));
    const divisor = Number(window.prompt("Enter a Divisor?"));

    if (divisor == 0) {
        throw new Error("You can't Divide by Zero");
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values Must be a Number");
    }

    console.log(dividend / divisor);    
} 

catch (error) {
    console.error(error)
}