const heading = document.querySelector('h1')
const selection = document.querySelector('select');
const weight = document.getElementById('weight');
const exp = document.getElementById('exp');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');


document.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');
    selection.selectedIndex = 0;

});

selection.addEventListener('change', function(){
    console.log('change');
    let selectedPokemon = selection.value;
    var pokemonInfo = fetchPokemon(selectedPokemon);
    pokemonInfo.then(displayPokemon);
});

async function fetchPokemon(selectedPokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
    const pokemon = await response.json();
    console.log(pokemon);
    console.log(pokemon.name);
    return pokemon;
}

function displayPokemon(pokemon) {
    console.log(pokemon);
    heading.innerHTML = pokemon.name;
    weight.innerHTML = pokemon.weight;
    exp.innerHTML = pokemon.base_experience
    
    
}
