class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move() {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        super.move(this.runSpeed);
        console.log(`This ${this.name} can Run`)
    }
}

class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        super.move(this.swimSpeed);
        console.log(`This ${this.name} can Swim`)
    }
}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        super.move(this.flySpeed);
        console.log(`This ${this.name} can Fly`)
    }
}

const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("Fish", 2, 12);
const hawk = new Hawk("Hawk", 3, 50);

console.log(rabbit.name);
console.log(fish.name);
console.log(hawk.name);

rabbit.run();