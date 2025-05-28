const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");

btn.classList.add("enabled");   //Add that CSS Selector in Js instead of add it in Html

// btn.classList.remove("enabled");    Remove that Class

//You can use toggle instead of add and remove, It's works the Same
btn.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

btn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

btn.classList.add("enabled");

btn.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += " 👾" 
    }

    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

h1.classList.add("enabled");

h1.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += " 👾" 
    }

    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

