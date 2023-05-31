# JavaScript Prototypal Inheritance

> ### In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:


```
Enample:

const person = {
  greet: 'Welcome',
  name : function(fullName){
    return `My name is ${fullName}`;
  }
}

const teacher = {
  teach: function(subject){
    return `I teach ${subject}`
  }
}

teacher.__proto__ = person;

console.log(teacher.greet)
console.log(teacher.name("Durgesh"))
console.log(teacher.teach('JavaScript'))

```