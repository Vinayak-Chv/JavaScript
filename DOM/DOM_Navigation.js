const ulelement = document.querySelectorAll("ul");


//First Element Child
ulelement.forEach(ulelement => {
    const firstChild = ulelement.firstElementChild;
    firstChild.style.backgroundColor = "Yellow";
});

//Last Element Child
ulelement.forEach(ulelement => {
    const lastChild = ulelement.lastElementChild;
    lastChild.style.backgroundColor = "Beige";
});

//Next Element Sibling
const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "Cyan";

//Previous Element Sibling

const element1 = document.getElementById("potato");
const previousSibling = element1.previousElementSibling;
previousSibling.style.backgroundColor = "Cyan";

//Parent Element - Gives the Properties to Whole List

const element2 = document.getElementById("apple");
const parent = element2.parentElement;
parent.style.backgroundColor = "Yellow";

//Children 

const element3 = document.getElementById("deserts");
const children = element3.children;

children[1].style.backgroundColor = "Cyan";

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "Slateblue";
// })