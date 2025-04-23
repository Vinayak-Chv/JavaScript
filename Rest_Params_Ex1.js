//It is the same as spread operators but it bundles it(does the opposite).

function openFridge(...foods) {
    console.log("Rest Parameters Example");
    console.log(foods);
}

function getFood(...foods) {
    console.log("Spread Operators");
    return foods
}

const food1 = "Pizza";
const food2 = "Hamburger";
const food3 = "HotDog";
const food4 = "Sushi";
const food5 = "Ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);