const myBtn = document.getElementById("btn");
const myLabel = document.getElementById("label");
const min = 1;
const max = 6;
let randomNum;

myBtn.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + 1;
    myLabel.textContent = randomNum;
}