# Closure

## <mark>In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing. </mark>In simpler terms, a closure "closes over" the variables it references, keeping them alive even when the outer function is no longer active.


```
function outerFunction() {
  var outerVariable = 'I am from the outer function!';

  function innerFunction() {
    console.log(outerVariable);  // Accessing outerVariable from the outer scope
  }

  return innerFunction;  // Returning the inner function
}

var closureExample = outerFunction();  // Assigning the inner function to a variable
closureExample();  // Invoking the inner function

```

## some Input/output Questions

### Ques 1. Time Optimization

```
function find(index){
    let a= [];
    
    for(let i=0;i< 10000000;i++){
        a[i] = i*i
    }
    
    return function(index){
        console.log(a[index]);
    }
}
const clouser = find()
console.time("6");
clouser(6);
console.timeEnd("6");
console.time("12");
clouser(12);
console.timeEnd("12");

```

### Ques 2. Block scope and setTimeout

```
for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },i * 1000);
};

Output >> 3,3,3

for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },i * 1000);
};

Output >> 0,1,2

### With Clouser

for(var i=0;i<3;i++){
    function print(){
        setTimeout(function(i){
            console.log(i)
        },1000)
    }
    print(i)
};

Output >> 0,1,2

```

### Ques 3. How would you use clouser as a private counter ?

```
function counter(){
    var _counter = 0;
    
    function add(increment){
        _counter = _counter + increment;
    }
    
    function retrive(){
        return `Counter: ${_counter}`
    }
    
    return {
        add,retrive
    }
}
const main = counter()
main.add(10)
main.add(20)
console.log(main.retrive())

```

### Ques 4. What is Module pattern ?

```
var module = (function(){
    function privateMethod(){
        console.log("Private");
    };

    return{
        publicMethod: function(){
            console.log("public");
        }
    }
})();

module.publicMethod();
module.privateMethod();


>> Output : Public
            Erorr
```

