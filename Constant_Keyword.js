const pi = 3.14159;

document.getElementById("mySub").onclick = function() {
    radius = Number(document.getElementById("myText").value);
    circumference = 2 * pi * radius;
    document.getElementById("res").textContent = `Circumference of a Circle is ${circumference}cm`;
}