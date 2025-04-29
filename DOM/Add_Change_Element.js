//Create The Element
const h1 = document.createElement("h1");

//Add Properties/Attributes
h1.textContent = "I Like Pizza!";
h1.id = "myH1";
h1.style.color = "Tomato";
h1.style.textAlign = "Center";

//Append/Prepend the Element to the Webpage
document.body.prepend(h1);  //Add it to Whole Page
document.getElementById("box1").append(h1); //Add it to box1

// const box2 = document.getElementById("box2");   //Add Between the Boxes
// document.body.insertBefore(h1, box2);

//Remove the Element
document.getElementById("box1").removeChild(h1);