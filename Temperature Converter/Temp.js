const textBox = document.getElementById("num");
const f = document.getElementById("toFah");
const c = document.getElementById("toC");
const res = document.getElementById("res");
let temp;

function convert() {

    if (f.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        res.textContent = `${temp.toFixed(1)}℉`;
    }
    else if (c.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        res.textContent = `${temp.toFixed(1)}℃`;
    }
    else {
        res.textContent = `Select a Unit`;
    }
}