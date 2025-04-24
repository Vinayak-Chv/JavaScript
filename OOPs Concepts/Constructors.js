function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function () {
        console.log(`You're Drive the ${this.make} ${this.model}`)
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camero", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver");

console.log(car1.model);
console.log(car2.make);

car1.drive()