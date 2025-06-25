# Promises in JavaScript
## What is a promise?
In the real world a promise is an assurance or guarantee that something will happen in the future. A person can promise another person a specific outcome or result. You have probably made a promise before.

![Promise GIF](promise.gif "Promise")

In JavaScript they work pretty much the same as the real world concept. A Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. 

A promise is made in the present, but if it is successfully fulfilled or not, we can only see in the future. And the some goes for promises in JavaScript. A promise in JavaScript can be in one of the three possible states, they also indicate the progress of the promise:

- pending: This is the default state of the promise. 
    - **In real life:** the promise has been made, but we don't know if it will be fulfilled or not.
- fulfilled: This is the state of a successful promise. 
    - **In real life:** the promise has been fulfilled, everything is great.
- rejected: This is the state of a failed promise.
    - **In real life:** the person that made the promise didn't deliver, the promise hasn't been fulfilled.

## How to create a promise in JavaScript?
A promise takes a callback-function that typically has two parameters **resolve** and **reject**. These parameter functions are provided by JavaScript on runtime.

```javascript
const myPromise = new Promise((resolve, reject) => {
    //condition to resolve or reject the promise
})
```

- **resolve():** This function is called when the asynchronous operation represented by the promise is successful and produces a result.
- **reject():** This function is called when the asynchronous operation encounters an error or fails to produce the expected result

Maybe you want to resolve the promise after a certain amount of time has passed. Let's visualize this scenario with a timeout.
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 2000)
})
```
Reference to the setTimeout() function:
- https://www.w3schools.com/jsref/met_win_settimeout.asp
- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

In promises the resolve() function represents the resolved value. Basically you can put every value in there that resolves your promise, in the example above it's just a string, but it could also contain an object, an array and so on...
The other scenario, that the promise is not fulfilled, for this case you can use the reject() function, in here you put the reason why the promise failed. Just like in real life, when you get a half-hearted apology ^^

In the example below you'll see those two in action:
```javascript
const myPromise = new Promise((resolve, reject) => {
const num = Math.random();
if (num >= 0.5) {
    resolve("Promise is fulfilled!");
} else {
    reject("Promise failed!");
}
});
```
You have the control over when to resolve or reject your promise and can tie it to a certain condition. Just how you can control the outcome of the promises you made in real life.

## Promises are then-able
But what does that actually mean?
To create a callback for a promise, you need to use the **.then()-method**.
The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. The callback for **rejected** is optional.

**The example below shows both cases, how to handle the promise being fulfilled or rejected:**

```javascript
const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
        resolve("Promise is fulfilled!");
    } else {
        reject("Promise failed!");
    }
});

function handleResolve(value) {
  console.log(value);
}

function handleReject(reason) {
  console.error(reason);
}

promise.then(handleResolve, handleReject);
// Promise is fulfilled!
// or
// Promise failed!
```
Each **then()** block return a new promise, which makes them chainable.
But what does that mean?:

- Return Value of then: The then method returns a new promise.
- Chaining: You can attach multiple then blocks to a promise, forming a chain.
- Handling Results: Each then block handles the resolved or rejected value of the previous promise in the chain.
- Sequential Execution: Asynchronous operations specified within each then block execute sequentially, one after another, following the order of the chain.

In summary, chaining then blocks allows for a structured and sequential handling of asynchronous operations, making the code more readable and maintainable. 
One commonly used example to show this is the fetching of data from an API using the fetch function in JavaScript.

```javascript
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```
The catch() block is used to handle errors that may occur during the execution of a promise chain. Usage: It's typically appended at the end of a chain of then() blocks. It is very similar to a **try-catch**-block in synchronous code.


### Additional study material:
How does asyncronous programming in JavaScript work? https://www.youtube.com/watch?v=Kpn2ajSa92c

A great video about promises in JavaScript:
https://www.youtube.com/watch?v=DHvZLI7Db8E

