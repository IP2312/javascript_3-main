document.getElementById('btn').addEventListener('click', displayJoke);



async function displayJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const myJoke = await response.json();
    console.log(myJoke.value);
    document.getElementById('joke').innerHTML = myJoke.value;
}









