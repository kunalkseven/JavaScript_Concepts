// Find the Output
// Question 1
(function(){
    var a = b = 3;
  })();
  
  console.log(typeof a); // Undefined
  console.log(typeof b); // 3

//// Question 2
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

// Output
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
