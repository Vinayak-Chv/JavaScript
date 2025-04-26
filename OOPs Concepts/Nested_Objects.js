const person = {
    fullName: "Lelouch Lamperouge",
    age: 19,
    isStudent: true,
    hobbies: ["Manipulate People", "Reading Books", "Zero"],
    address: {
        street: "Brno University",
        city: "Japan / Area 11",
        country: "Britania"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies[0]);
console.log(person.address);


for (const property in person.address) {
    console.log(person.address[property]);
}

//2nd Example

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Yuuchi", 23, "Japan", "123 Chiba St.", "Int. Obloc");
const person2 = new Person("Ayankoji", 19, "Japan", "123 Tokyo St.", "Int. 4KTrey");
const person3 = new Person("Baku", 27, "Japan", "123 Shibuya St.", "Int. Haitan");

console.log(person1.address.country);