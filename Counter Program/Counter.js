const decBtn = document.getElementById("decrease"); 
const resBtn = document.getElementById("reset"); 
const incBtn = document.getElementById("increase");
const label = document.getElementById("countLabel");
let count = 0;

incBtn.onclick = function() {
    count++;
    label.textContent = count;
}

decBtn.onclick = function() {
    count--;
    label.textContent = count;
}

resBtn.onclick = function() {
    count = 0;
    label.textContent = count;
}