const person1 = {
    firstName: "Ichigo",
    lastName: "Kurosaki",
    age: 24,
    isShinigami: true,

    say: function () {
        console.log("BanKai!! Tensa Zangetsu");
    },

    eat: function () {
        console.log("I'm Eating a Sushi!!");
    }
}

console.log(person1.firstName);

const person2 = {
    firstName: "Naruto",
    lastName: "Uzumaki",
    age: 27,
    isHokage: true,

    say: function () {
        console.log("Ransen Shuriken");
    },

    eat: function () {
        console.log("I'm Eating a Ichiraku Ramen!!");
    }
}

console.log(person2.firstName);
person2.eat();