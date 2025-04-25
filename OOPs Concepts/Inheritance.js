class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run() {
        console.log(`This ${this.name} is Running`)
    }
}

class Fish extends Animal{
    name = "Fish";

    swim() {
        console.log(`This ${this.name} is Swimming`)
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly() {
        console.log(`This ${this.name} is Flying`)
    }
}

const r = new Rabbit();
const f = new Fish();
const h = new Hawk()

console.log(r.alive);
r.sleep();