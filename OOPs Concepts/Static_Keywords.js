class MathUtil {
    static PI = 3.14159;

    static getDiamenter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiamenter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

//2nd User
class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} Users Online`)
    }

    sayHello() {
        console.log(`Hello! My Username is ${this.username}`);
    }
}

const user1 = new User("Ichigo");
const user2 = new User("Yuroichi");
const user3 = new User("Byakyuya");

console.log(user1.username);
console.log(User.userCount);
user1.sayHello();
User.getUserCount();