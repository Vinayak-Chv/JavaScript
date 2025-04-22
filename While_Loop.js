let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt("Enter your Username?");
    password = window.prompt("Enter your Password?");

    if (username === "Admin" || username === "admin" && password === "pass@123") {
        loggedIn = true;
        console.log("Welcome!!");
    }

    else {
        console.log("Invalid Credentials!!");
    }
}