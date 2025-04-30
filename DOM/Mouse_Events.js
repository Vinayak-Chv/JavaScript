//To Do Only for the Boxes but not the button just change box.addEventListener and inside change 
//from box.style to box.target.style. Just remove the target to use it for the button.

const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.addEventListener("click", event => {
    box.style.backgroundColor = "Tomato";
    box.textContent = "OUCH! 🤕";
});

btn.addEventListener("mouseover", event => {
    box.style.backgroundColor = "Yellow";
    box.textContent = "Don't Do It! 😲";
});

btn.addEventListener("mouseout", event => {
    box.style.backgroundColor = "Lightgreen";
    box.textContent = "Click Me! 😄";
});