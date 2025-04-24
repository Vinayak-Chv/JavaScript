//This is not for the Arrow Function

const person1 = {
    firstName: "Lelouch",
    lastName: "Ramperouge",
    favFood: "Hamburgers",
    
    sayHello: function () {
        console.log(`Hi!! I'm ${this.firstName}`);
    },

    eat: function () {
        console.log(`My Favourite Food is ${this.favFood}`);
    }
}

person1.sayHello();

const person2 = {
    firstName: "Johan",
    lastName: "Libert",
    favFood: "Steaks",
    
    sayHello: function () {
        console.log(`HI!! I'm ${this.firstName}`);
    },

    eat: function () {
        console.log(`My Favourite Food is ${this.favFood}`);
    }
}

person2.eat();