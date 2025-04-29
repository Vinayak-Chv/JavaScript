//By Id
const head = document.getElementById("heading");

head.style.backgroundColor = "Yellow";
head.style.textAlign = "Center";

console.log(head);

//By Class Name
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "Cyan"

// for (let fruit of fruits) {
//     fruit.style.backgroundColor = "Cyan";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "Beige";
});

//By Tag Name
const h4s = document.getElementsByTagName("h4");
const lis = document.getElementsByTagName("li");

// h4s[0].style.backgroundColor = "Purple";

// for (let h4 of h4s) {
//     h4.style.backgroundColor = "Purple";
// }

// for (let li of lis) {
//     li.style.backgroundColor = "Lightgreen"
// }

Array.from(h4s).forEach(h4 => {
    h4.style.backgroundColor = "Purple"
});

Array.from(lis).forEach(lis => {
    lis.style.backgroundColor = "Lightgreen"
})

//Query Selector - Only Select the First One or Null (Only First Element). You Can Select Class or a TagName

const element = document.querySelector(".fruits");

element.style.backgroundColor = "Yellow";

//Query Selector All - Static Element

const veges = document.querySelectorAll("li");

veges[0].style.backgroundColor = "Yellow"