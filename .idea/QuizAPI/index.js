let nrLevels = 0;

const btnStart = document.getElementById('btn-start');
const setup = document.getElementById('popup-setup');
const btnSubmit = document.getElementById('submit');
const nrQuestions = document.getElementById('nr-questions');
const difficultly = document.getElementById('difficulty');

const questionField = document.getElementById('question');
const levels = document.getElementById('levels')

const popupAnswers = document.getElementById('popup-aswers')
const btnAnswers = document.querySelectorAll('.popup-button');
const btnAnswer1 = document.getElementById('popup-button1');
const btnAnswer2 = document.getElementById('popup-button2');
const btnAnswer3 = document.getElementById('popup-button3');
const btnAnswer4 = document.getElementById('popup-button4');


document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

})

btnStart.addEventListener('click', function () {
    console.log('start');
    setup.style.display = 'block';
})

btnSubmit.addEventListener('click', async function () {
    console.log('submit');
    nrLevels = nrQuestions.value;
    questionsDifficultly = difficultly.value;
    console.log(questionsDifficultly);
    const questions = await getQuestions(nrLevels, questionsDifficultly);
    console.log("Response: ");
    console.log(questions);
    createLevels(nrLevels, questions);
    setup.style.display = 'none';

})


async function getQuestions(nrLevels, difficultly) {
    console.log('get question');
    const response = await fetch(`https://opentdb.com/api.php?amount=${nrLevels}&difficulty=${difficultly}&type=multiple`)
    const trivia = await response.json();
    console.log("Trivia:  ");
    console.log(trivia.results);
    return trivia.results;
}


function createLevels(nrLevels, questions) {
    levels.innerHTML = '';
    for (let i = 0; i < nrLevels; i++) {
        let newLevel = document.createElement('div');
        newLevel.classList.add('level');
        newLevel.id = 'level ' + (i + 1);
        newLevel.innerHTML = i + 1;
        newLevel.addEventListener('click', async function levelClick() {
            newLevel.innerHTML = 'clicked';
            askQuestion(questions[i]);
            let correctAnswert = await displayAnswer(questions[i]);
            newLevel.removeEventListener('click', levelClick);
            console.log("after wait: ")
            console.log(correctAnswert);
            newLevel.style.backgroundColor = correctAnswert ? 'green' : 'red';

        })
        levels.appendChild(newLevel);
    }
}

function askQuestion(question) {
    console.log('ask question');
    console.log(question.question);
    questionField.innerHTML = question.question
}

async function displayAnswer(question) {
    console.log('display answers');
    const answers = [
        {answer: question.correct_answer, correct: true},
        {answer: question.incorrect_answers[0], correct: false},
        {answer: question.incorrect_answers[1], correct: false},
        {answer: question.incorrect_answers[2], correct: false}
    ];
    console.log(answers);
    let shuffledArry = shuffle();
    console.log(shuffledArry);
    popupAnswers.style.display = 'block';

    return new Promise(resolve => {
        btnAnswers.forEach((btn, i) => {
            btn.innerHTML = answers[shuffledArry[i]].answer;
            btn.dataset.correct = answers[shuffledArry[i]].correct;
            btn.disabled = false;
            btn.style.backgroundColor = '';
            btn.addEventListener('click', function handler() {
                let answerCorrect = false;
                if (btn.dataset.correct === 'true') {
                    btn.style.backgroundColor = 'green';
                    answerCorrect = true;
                    console.log('Answer correct');

                } else {
                    btn.style.backgroundColor = 'red';
                    answerCorrect = false;
                    console.log('Answer incorrect');
                }
                btnAnswers.forEach(btn => btn.disabled = true);
                resolve(answerCorrect);
            })

        });
    })


}

//Fisher_Yates_Shuffle
function shuffle() {
    array = Array.from({length: 4}, (_, i) => i);
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}



