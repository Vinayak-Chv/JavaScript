const fruits = [{name: "Apple", color: "Red", calories: 95}, 
                {name: "Orange", color: "Orange", calories: 45}, 
                {name: "Banana", color: "Yellow", calories: 105}, 
                {name: "Coconut", color: "White", calories: 159}, 
                {name: "Pineapple", color: "Yellow", calories: 37}];

console.log(fruits[0].calories);

fruits.push({name: "Grapes", color: "Purple", calories: 62});   //Add Another element at the end of it
fruits.pop()    //Remove the Last Element
fruits.splice(1, 2);    //Remove the Element at a Specific index

fruits.forEach(fruit => console.log(fruit.color));  //Give all the element of the specific key element
console.log(fruits.map(fruit => fruit.name));
console.log(fruits.filter(fruit => fruit.color === "Yellow"));
console.log(fruits.reduce( (max, fruit) => fruits.calories > max.calories ? fruit : max));

console.log(fruits);