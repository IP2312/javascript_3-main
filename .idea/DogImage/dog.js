const btnDog = document.getElementById('showDog');
const dogImage = document.getElementById('dogImage');


async function displayDoge() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const dog = await response.json();
    console.log(dog.message);
    dogImage.src = dog.message;
}


btnDog.addEventListener('click', displayDoge);







