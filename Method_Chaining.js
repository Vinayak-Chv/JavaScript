const btn = document.getElementById("sub");
const res = document.getElementById("res");

btn.onclick = function() {
    const text = document.getElementById("name").value;
    res.textContent = `Name: ${text.trim().charAt(0).toUpperCase() + text.slice(1).toLowerCase()}`;
}