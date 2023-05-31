// Class Basics

class Rectangale {
  constructor(_height, _width, _color) {
    this.height = _height;
    this.width = _width;
    this.color = _color;
  }

  area() {
    return `Area of ${this.color} Rectangle is ${this.height * this.width}`;
  }

  parameter() {
    return `Parimeter of ${this.color} Rectangle is ${
      2 * (this.height + this.width)
    }`;
  }
}

const BlueRactangale = new Rectangale(4, 5, "Blue");

// console.log(BlueRactangale)
// console.log(BlueRactangale.area())
// console.log(BlueRactangale.parameter())

// Getter and Setter Methods

class Square {
  constructor(_width) {
    this.height = _width;
    this.width = _width;
    this.numberOfRequest = 0;
  }

  get area() {
    this.numberOfRequest++;
    return `Area of ${this.color} Square is ${this.height * this.width}`;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

const square1 = new Square(4);
square1.area = 25;

// console.log(square1)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)

// console.log(square1.numberOfRequest)

// Classes Static Methods

class Rectangale1 {
  constructor(_height, _width) {
    this.height = _height;
    this.width = _width;
  }
  static isEqual(a, b) {
    return (a.height && a.width) === (b.height && b.width);
  }

  static isSameArea(a, b) {
    return a.height * a.width === b.height * b.width;
  }
}

const newRactangle1 = new Rectangale1(4, 5);
const newRactangle2 = new Rectangale1(5, 4);

// console.log(newRactangle1)
// console.log(newRactangle2)
// console.log(Rectangale1.isEqual(newRactangle1,newRactangle2))
// console.log(Rectangale1.isSameArea(newRactangle1,newRactangle2))

// Classes Inheritance & Extends

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  intro() {
    return `Hello my name is ${name} and i am ${age} year old.`;
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearOfExperinces) {
    super(_name, _age);

    // Custome Behaviour
    this.yearOfExperinces = _yearOfExperinces;
  }

  profile() {
    return `I am ${this.name}. I have ${this.yearOfExperinces}.`;
  }

  skills(...skill) {
    return `My skills are in ${skill}.`;
  }
}

const programmers = [
  new Programmer("Ram", 25, 2),
  new Programmer("Kishna", 26, 3),
];

function softwareDevloperSkills(programmers) {
  for (let programmer of programmers) {
    programmer;
  }
}

// const person1 = new Person('Ram',27);
// const programmer1 = new Programmer('Kunal',27,3);

// console.log(person1)
// console.log(programmer1)
// console.log(person1.skills('React','Node.js'))  // Parents class can't access the child class's methods but child does.
// console.log(programmer1.skills('React','Node.js'))
// console.log(softwareDevloperSkills('React','Node.js'))
// console.log(programmers)

// Classes Polymorphism

class Animal {
  constructor(_name) {
    this.name = _name;
  }

  makeSound() {
    console.log(`Genric sound of the animal`);
  }
}

class Dog extends Animal {
    constructor(_name){
        super(_name);
    }

    // Polymorphism
    makeSound(){
        super.makeSound();
        console.log(`Bho Bhoo !!`)
    }
}

// const newAnimal = new Animal('Horse')
// newAnimal.makeSound();
// console.log('===============')
// const tiger = new Dog('Tiger');
// tiger.makeSound()



// Exercises

// Create Class todo list

class Todos {
    constructor(_listElement){
        this.listElement = _listElement;
        this.items = [];
    }

    add(item){
        this.items.push(item);
        return this.items;
    }

    remove(indexNo){
        const newList = []
        this.items.filter((ele,index)=>{
            if(index != indexNo){
                newList.push(ele)
            }
        })
        return newList
    }

    done(index){
        this.items[index] = this.items[index].toString() + ' Done ✔';
        return this.items;
    }
}


const myTodo = new Todos('My Todo');

// console.log(myTodo.add('Book Reading'));
// console.log(myTodo.add('Gym'));
// console.log(myTodo.add('cleaning'));
// console.log('+++++++++++');
// console.log(myTodo.remove(0));
// console.log(myTodo.done(0))