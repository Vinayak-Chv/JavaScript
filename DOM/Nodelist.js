const btns = document.querySelectorAll(".btn");

//Change the Properties of the Button
btns.forEach(btn => {
    btn.style.backgroundColor = "Green";
    btn.textContent += " 😊";
});

//Change the Properties after Clicking it 
btns.forEach(btn => {
    btn.addEventListener("click", event => {
        event.target.style.backgroundColor = "Tomato";
    })
});

//Change the Properties after Mouse Event like Hover it 
btns.forEach(btn => {
    btn.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)"
    })
});

//Change the Properties after Mouse Event like after Hover and Leave it 
btns.forEach(btn => {
    btn.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
    })
});

//Adding the New Element - There is Something Wrong in it

let newbtn = document.createElement("button");
newbtn.textContent = "Button 5";
newbtn.classList = "btn";
document.body.appendChild(newbtn);

btn = document.querySelectorAll(".btn");

//Remove an Element
btns.forEach(btn => {
    btn.addEventListener("dblclick", event => {
        event.target.remove();      //Only Remove from the WebPage
        btns = document.querySelectorAll(".btn");   //But Remove from the Node List also because it is Store in it
    })
});
