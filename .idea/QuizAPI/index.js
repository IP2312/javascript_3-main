let nrLevels = 0;


const btnStart = document.getElementById('btn-start');
const setup = document.getElementById('popup-setup');
const btnSubmit = document.getElementById('submit');

const btnAswer1 = document.getElementById('popup-button1');
const btnAswer2 = document.getElementById('popup-button2');
const btnAswer3 = document.getElementById('popup-button3');
const btnAswer4 = document.getElementById('popup-button4');





document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

})

btnStart.addEventListener('click', function(){
    console.log('start');
    setup.style.display = 'block';
})



function createLevels(nrLevels){
    for (let i = 0; i < nrLevels; i++) {
        let newLevel = document.createElement('div');
        newLevel.classList.add('level');
        newLevel.id ='level ' + (i+1);
        newLevel.innerHTML = i +1;
        newLevel.addEventListener('click', function(){
            newLevel.innerHTML = 'clicked';
            askQuestion();
            displayAnswer();
        })
        document.getElementById('levels').appendChild(newLevel);
    }
}

async function askQuestion(){
    console.log('ask question');
    const response = await fetch(`https://opentdb.com/api.php?amount=50`)
    const trivia = await response.json();
    console.log(trivia);
    console.log(trivia.results[0].question)
    console.log(trivia.results[0].correct_answer)
    document.getElementById('question').innerHTML = trivia.results[0].question;
    btnAswer1.innerHTML = trivia.results[0].correct_answer;
}

function displayAnswer(){
    console.log('display answers');
    document.getElementById('popup-aswers').style.display = 'block';
}

