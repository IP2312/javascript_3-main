
# Async / Await
The async/await syntax is a special syntax created to help you work with promise objects. It helps you to structure your asyncronous code better and makes it cleaner. You can see it as alternative syntax to promises.

Let's review our **fetch()** example from before:
```javascript
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
With the increasing complexity of your async code this approach will get messy and unstructured pretty soon. It can also lead to the famous **callback-hell** which is created by deeply nested callback functions, which are hard to deal with and error prone. But luckily there is a solution to all of that: the **async / await syntax**.

Take a look at our previous example with the async/ await syntax:
```javascript
async function getJokeData() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json();
    console.log(joke)
}

getJokeData()
```
**async** is a JavaScript keyword used to create a function. With this keyword the function will always return a promise. To use it, place async before the function keyword when declaring the function.

```javascript
async function willReturnAPromise(){}
```

To use the await keyword, always place it before a promise, it is similar to a .then() which makes sure promise is either fulfilled or rejected before it continues.

```javascript
//just like we did in the example of the async function
await fetch('...')
await response.json()
```
The await keyword did only live inside an async function and couldn't be used outside.
This changed this year with the new ECMA Script 2024 (ES15) version. A top-level await is now featured in JavaScripts new version.

```javascript
const myJoke = await getJokeData();
console.log(myJoke)

async function getJokeData() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json();
    return joke.value
}
```
While both then syntax and async/await offer ways to handle asynchronous operations in JavaScript, async/await provides a cleaner and more readable alternative, reducing the complexity of nested callbacks and making asynchronous code easier to understand and maintain.

### Additional Study Material:
- Advantages of async/await
https://www.youtube.com/watch?v=V_Kr9OSfDeU

