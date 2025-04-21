let btn = document.getElementById("btn");
let res = document.getElementById("res");

btn.onclick = function() {
    let text = Number(document.getElementById("myText").value);
    res.textContent = text < 12 ? "Good Morning" : "Good Afternoon";
}