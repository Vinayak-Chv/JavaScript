//You can use display none to hide and block to show but the other element will take the space so we have use visibility.

const btn = document.getElementById("btn");
const img = document.getElementById("img");

btn.addEventListener("click", event => {

    if (img.style.visibility === "hidden") {
        img.style.visibility = "visible";
        btn.textContent = "Hide";
    }

    else {
        img.style.visibility = "hidden";
        btn.textContent = "Show";
    }
});