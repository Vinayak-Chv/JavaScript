//This is the Easy and not used by anyone way
// let username = window.prompt("What's your Username!");

// console.log(`My Name is ${username}`);

//Professional Way

let username;

document.getElementById("mySub").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Welcome! ${username}`;
}