# *Interview Questions*

## *React Js Interview Question*

## What is difference between virtual dom and shallow dom , dom in React js

Virtual DOM is creating a copy of the whole DOM object, and
Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent.

## Which algorithm React is used to compare DOM?

React uses virtual DOM to enhance performance. Virtual dom is a lightweight copy of the real DOM stored in memory. When there is a change of state or prop, React creates a virtual DOM. It uses the diffing algorithm to compare the previous virtual DOM with the updated virtual DOM.

## What are the controlled and uncontrolled components in React js?

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

## What are Hooks in React js?

Hooks are pure javascript functions which are added in React 16.8. They let you use state and other React features without writing a class.

## What is jsx, babel, webpack?

JSX is an extension to JavaScript which allows us to write XML-like syntax to define DOM elements, which are translated by Babel into vanilla JS.
Babel is a JavaScript compiler. Babel is a toolchain that is mainly used to convert ECMAScript.
Webpack
Webpack is responsible for bundling all of our components together and running a local development server to test our code in the browser.

## What is Redux?

Redux is an open-source JavaScript library for managing and centralising application state. It is most commonly used with libraries such as React

## What is reducer , action, store in Redux?

Reducer is a plain javascript function that determines changes to an application's state and which take two arguments which are action and state and return a new state as a result.

Actions are a plain JavaScript object that contains information. They are the only source of information for the store. Actions have a type field that tells what kind of action to perform and payload for the application.

Store is an immutable object tree in Redux. A store is a state container which holds the application's state. Redux can have only a single store in your application.

## What is middleware in Redux?

Thunks is middleware function provides a medium to interact with dispatched action before they reach the reducer.

## Explain data flow in Redux?

Redux follows the unidirectional data flow. It means that your application data will follow a one-way binding data flow.

## What is Redux-Thunk?

Redux-Thunk is a middleware function that provides a medium to interact with dispatched action before they reach the reducer.

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.

## What is Redux-Saga, Difference between Redux-thunk and Redux-saga?

Difference between class component and function component?
Previously in react 16v we can't use states in functional components but after introduction with hooks we are using states in functional components.

How can we implement componentWillUnmount in the function component?

Using useEffect

useEffect,UseState,useMemo and useCallback hooks in Details.
The useEffect Hook allows you to perform side effects in your components.

useState is a Hook that allows you to have state variables in functional components.

useMemo
React has a built-in hook called useMemo that allows you to memoize expensive values so that you can avoid calling them on every render.

useCallback
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies is updated.
This can improve performance.

## Explain lifecycle method in React js?

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

## What is the difference between export default and export in React js?

## What is portal in React js

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

## What is useRef in React js?

useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

## What is server side rendering in React js?

Server-side rendering (SSR) is an application's ability to convert HTML files on the server into a fully rendered HTML page for the client. The web browser submits a request for information from the server, which instantly responds by sending a fully rendered page to the client.

## What is useStrict in React js?

strict mode in React is a development-only tool that enforces stricter warnings and checks as you write React code

## What is a fragment in React js ?

Fragments let you group a list of children without adding extra nodes to the DOM.

## What is react router in React js

## What is node module in React js

## What is the default localhost server port in react js. how can we change the local server port

## What is a high order component in React js?

Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.

## What is a pure component in React js?

A React component is considered pure if it renders the same output for the same state and props.

## What is difference state and props in React js

How to optimise React js app

## What is prop drilling in React js how to overcome it

Using Context API
Using Render props

## What is context api in React js

The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling"

## What is super, constructor , render function in React js

## What is a memo in react?

Using memo will cause React to skip rendering a component if its props have not changed.

Array destructuring
Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.

Service Worker
A service worker is a script that your browser runs in the background, separate from a web page, which allows the use of features that don't need a web page or user interaction. A current day example would be a push notification.

UseState is synchronous or Asynchronous
useState is an asynchronous hook, it will wait for the component to finish its cycle, re-render, and then it will update the state.

## What is the synthetic event?

A Synthetic event is an Object which acts as a cross-browser wrapper around the browser's native event. To combine the behaviour around the different browsers as a single api so the browsers show consistent behaviour across the different browsers.

useImperativeHandle(ref, createHandle, dependencies?)
useImperativeHandle at the top level of your component to customise the ref handle it exposes.

## What is React reconciliation?

The mechanism of diffing one tree with another to determine which parts are required to be changed and then update the original DOM with it is called Reconciliation in react.

Which algorithm React uses for reconciliation?
Instead, React implements a heuristic O(n) algorithm based on two assumptions: Two elements of different types will produce different trees. The developer can hint at which child elements may be stable across different renders with a key prop.

## What is “React Fiber”?

Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.

## How does React Fibre work?

React Fiber divides the work into multiple units of work, which is fiber. It schedules the work in multiple frames and uses the deadline from the requestIdleCallback. Every update has its priority defined like animation, or user input has a higher priority than rendering the list of items from the fetched data.

# *HTML interview question*

## What is <!Doctype html> in Html5?

The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in.

## What is the difference between div and span in Html?

A div element is used for block-level organisation and styling of page elements, whereas a span element is used for inline organisation and styling.

## What are semantic tags and non semantic tags in Html?

A semantic element clearly describes its meaning to both the browser and the developer. Example: <header>, <form>,<table>,<segment>, etc.
Non-semantic elements don't have any meaning. They don't tell anything about the content they contain. Example: <div> and <span>

## What is the difference between html and html5?

HTML5 is a new version of HTML with new functionalities with markup language with Internet technologies. HTML does not have support for video and audio but HTML5 supports both video and audio.

## What is the Iframe tag in Html5?

The iframe in HTML stands for Inline Frame. An inline frame is used to embed another document within the current HTML document.
What are the formatting tags in html?
HTML Formatting basically refers to the enhancement of text in order to increase the visual appeal. Example:

```
  <b> - Bold text
  <strong> - Important text
  <i> - Italic text
  <em> - Emphasised text
  <mark> - Marked text
  <small> - Smaller text
```

## What is the difference between <b> and <Strong> in html?

The bold (<b>) tag specifies bold text without any extra importance.
The <strong> tag is used to define text with strong importance.

## What is the viewport attribute in html?

Viewport is a meta tag located in the <head> of the HTML. The viewport is the user's visible area of a web page.

## What is an attribute in html?

All HTML elements can have attributes · Attributes provide additional information about elements · Attributes are always specified in the start tag.

## What is block level element and inline element in html?

A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary.

# *Css Interview Question*

## What are the selector in css?

CSS selectors are used to "find" (or select) the HTML elements you want to style.
Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)

## What is a media query in css?

Media queries are a key part of responsive web design, as they allow you to create different layouts depending on the size of the viewport

## What is the different position in css?

The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).

Static An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

```
div.static {
 position: static;
border: 3px solid #73AD21;
}
Relative: An element with position: relative; is positioned relative to its normal position.
div.relative {
position: relative;
left: 30px;
border: 3px solid #73AD21;
}
Absolute: An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

div.relative {
position: relative;
width: 400px;
height: 200px;
border: 3px solid #73AD21;
}

div.absolute {
position: absolute;
top: 80px;
right: 0;
width: 200px;
height: 100px;
border: 3px solid #73AD21;
}
Fixed: An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
div.fixed {
position: fixed;
bottom: 0;
right: 0;
width: 300px;
border: 3px solid #73AD21;
}
Sticky: An element with position: sticky; is positioned based on the user's scroll position.
div.sticky {
position: -webkit-sticky; /_ Safari _/
position: sticky;
top: 0;
background-color: green;
border: 2px solid #4CAF50;
}
```

## What is bom in css?

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. The BOM consists of the objects navigator , history , screen, location and document which are children of window

## What is the difference between px,em,rem,%,vw and vh in css?

Absolute Unit
PX: Pixels (px) are considered absolute units, although they are relative to the DPI and resolution of the viewing device.
Relative Units
EM: Relative to the parent element
REM: Relative to the root element (HTML tag)
%: Relative to the parent element
VW: Relative to the viewport’s width
VH: Relative to the viewport’s height

## What is a flex box in css?

Flexbox is a one-dimensional layout method for arranging items in rows or columns. It used to make page layouts.

## What is a pseudo selector in css?

CSS pseudo-classes are used to add styles to selectors, but only when those selectors meet certain conditions.
Example: "hover", "focus", or "active", like this: a:hover { /_ your style here _/ }
What are breakpoints for viewport responsive devices?

Why do we use box-sizing in css?
The box-sizing CSS property sets how the total width and height of an element is calculated. It allows us to include the padding and border in an element's total width and height.

# *Javascript interview Question*

## What is Ecmascript in Javascript

## What is difference between let ,cons and var

## What is spread operator, Rest operator , default parameter

## What is deep copy and shallow copy in Javascript

Shallow Copy stores the references of objects to the original memory address. Deep copy stores copies of the object's value
3 Ways to Copy Objects in JavaScript
Use the spread (...) syntax
Use the Object.assign() method
Use the JSON.stringify() and JSON.parse() methods

## What is promise , callback function , async await in in Javascript

Promise: Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
Its has 3 main stages
Fulfilled
Rejected
Panding
callback function : A callback is a function passed as an argument to another function.The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.
async/await : An Async function is a function declared with the async keyword.
Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result.

## What is the difference between a promise and a callback in Javascript?

What are the three phases of event propagation?
The standard DOM Events describes 3 phases of event propagation:
Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

## What is event bubbling and event capturing in Javascript?

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

## What is a higher order function in Javascript?

## Explain different-2 types of function in Javascript

## What is arrow function vs Normal function in Javascript.

The arrow functions are only callable and not constructible
Why do we use call, apply bind method in Javascript?

Call invokes the function and allows you to pass in arguments one by one.

Apply invokes the function and allows you to pass in arguments as an array.

Bind returns a new function, allowing you to pass in this array and any number of arguments.

## What is prototype inheritance in Javascript?

## What is throttling and debouncing in js?

Throttling is used to call a function after every millisecond or a particular interval of time; only the first click is executed immediately.
Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance

## What is the execution context, event loop ,stack, call queue and microtask queue in Javascript?

The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

## What is setTimeOut and setInterval in Javascript?

## What is object.seal and object.freeze in Javascript?

## What is the difference between map and set in Javascript?

## What is Weakmap and Weakset in Javascript

## What is sessionStorage, localStorage and cookie?

## Write a program to sort an array

## What is the use of the json.stringify and json parse() method in Javascript?

The JSON. parse() function is used to convert a string into a JavaScript object while the JSON. stringify() function is used to convert a JavaScript object into a string

What are is map, filter , reducer in javascript

## What is generator function in Javascript

What does event propagation do?
Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM: Event Bubbling and Event Capturing.

How to stop event propagation in Javascript?
To stop an event from further propagation in the capturing and bubbling phases, you call the event.stopPropation() method in the event handler.

## What is closure in Javascript?

A closure is a function having access to the parent scope. It preserves the data from outside.
A closure is an inner function that has access to the outer function’s variables.

## What is housing in Javascript?

## What is the dead zone in Javascript?

Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

## What is function currying in Javascript.

currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument

## What is mutation observer in Javascript

## What is memorization in javascript

# *Javascript Input/Output interview Question*

## Write a program to find 4th largest element occurence in array without using any Inbuilt methods.

## Write a program to find element occurence in array

console.log(count); // 👉 {1: 3, 2: 1, 3: 2}

## Write a program to remove duplicate item from array

```
const arr = [1, 2, 3, 4, 1, 2];
const b = [];
for (let i = 0; i < arr.length; i++) {
if (b.indexOf(arr[i]) == -1) {
b.push(arr[i])
}
}
console.log("removed array value", b)
const arr = [1, 2, 3, 4, 1, 2];
const b = [];

arr.filter((dup) => {
if (b.indexOf(arr[dup]) == -1) {
b.push(arr[dup])
}
})
console.log("removed array value", b)

What will be output of that code
Const firstname = fun(); Let name = ‘vivek’ Function fun(){
Return `my is ${name} malviya`
}
console.log(firstname);
```

## Write a program for following output

console.log("output with normal function",mul(2)(4)(6))

## Write a program for following output using arrow function

## Write a program return resolve if value is less than 5 using Promise

```
function fun(a) {
let myPromise = new Promise((myResolve, myReject) => {
let x = 0;

            // The producing code (this may take some time) if (a < 7) {
            myResolve(`number is given ${a}`);
        } else {
            myReject("Error");
        }
    });

myPromise.then((result) => {
console.log(result)
})
}
fun(5);
```

What will be output for this program ?

And

## Write a program to multiply two number without using multiply Sign in Javascript

## Write a program sorting in javascript?

```
const arr = [3, 2, 5, 4, 1, 0]
for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] < arr[j]) {
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
console.log("Elements of array sorted in ascending order:");
for (let i = 0; i < arr.length; i++) {
console.log("Elements of array sorted in ascending order ", arr[i]);
}
```
## What will be output ?

## What's the console output of?
```
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[c]);
```

Answer : -
Object keys are automatically converted into strings.
We are trying to set an **_object as a key_** to object a, with the value of 123.
However, when we stringify an object, it becomes "[object Object]".
So what we are saying here, is that a["[object Object]"] = 123. Then,
we can try to do the same again.
c is another object that we are implicitly stringifying.
So then, a["[object Object]"] = 456. Then, we log a[b],
which is actually a["[object Object]"].
We just set that to 456, so it returns 456. \*/

## Write a program to make polyfill for map method in javascript

## Write a program to make polyfill for filter method in javascript.

## Write a program to make polyfill for reduce method in javascript.
