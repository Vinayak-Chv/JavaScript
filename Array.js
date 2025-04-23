let fruits = ["Apple", "Orange", "Banana"];

fruits[0] = "Coconut";  //Add or Change the Index Value

console.log(fruits);    //Print all the Elements
console.log(fruits[0]); //Print only the specified index element
fruits.push("Coconut"); //Add the Element at last
fruits.pop();   //Remove the last Element
fruits.unshift("Mango");    //Add the Mango to the 0 index and shift all the elements
fruits.shift();
console.log(fruits.length);
console.log(fruits.indexOf("Apple"));   //Give the Elements index
fruits.sort().reverse();    //First to sort it in alphabetical order and the to reverse it

for (const fruit in fruits) {
    console.log(fruit);
}