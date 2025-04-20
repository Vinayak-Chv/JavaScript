document.getElementById("mySub").onclick = function() {
    let age = Number(document.getElementById("myText").value);
    document.getElementById("myh1").textContent = `You're ${age} years old`;
}