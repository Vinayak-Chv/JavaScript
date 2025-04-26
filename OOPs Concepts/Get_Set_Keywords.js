class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }

        else {
            console.error("Width must be a Positive Number")
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }

        else {
            console.error("Height must be a Positive Number")
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return (this._width * this._height).toFixed(1);
    }
}

const rect = new Rectangle(3, 4)

console.log(`Width: ${rect.width}`);
console.log(`Height: ${rect.height}`)
console.log(`Area of Rectange: ${rect.area}`);

console.log("------------------");

//2nd Example

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName
        }
        else {
            console.error("First Name must be an non-empty String");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName
        }
        else {
            console.error("Last Name must be an non-empty String");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number")
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person("Johan", "Liebert", 20);

console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Full Name: ${person.fullName}`);