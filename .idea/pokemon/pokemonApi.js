const heading = document.querySelector('h1')

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const pokemon = await response.json();
    console.log(pokemon);
    console.log(pokemon.name);
    heading.textContent = pokemon.name;

}

fetchPokemon();

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');
});