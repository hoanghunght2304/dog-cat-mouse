const Dog = require('./dog');
const Cat = require('./cat');
const Mouse = require('./mouse');

const dog = new Dog('Tom');
const tom = new Cat();
const mouse = new Mouse();
dog.eat(tom);
console.log(dog);

