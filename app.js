import getRandomThrow from './get-random-throw.js';
import checkResult from './utils.js';

// store DOM elements
// buttons
const playButton = document.getElementById('play-button');
// const challengeButton = document.getElementById('challenge-button');
const computerImgAsButton = document.getElementById('computer-result-img');
const resetButton = document.getElementById('reset-button');
const rulesButton = document.getElementById('rules-button');
const footerElement = document.getElementById('footer');
// divs, sections
const rulesSectionDiv = document.getElementById('rules-section-div');
const playSection = document.getElementById('play-section');
// images
const computerResultImg = document.getElementById('computer-result-img');
// text
const resultTextElement = document.getElementById('result-text');
const totalsTextElement = document.getElementById('totals-text');

// total placeholders
let games = 0;
let wins = 0;
let losses = 0;
resetGame();

// add event listeners
playButton.addEventListener('click', displayGame);
// challengeButton.addEventListener('click', doChallenge);
computerImgAsButton.addEventListener('click', doChallenge);
resetButton.addEventListener('click', resetGame);
rulesButton.addEventListener('click', displayRules);


// reset to initial state
function resetGame() {
    // 'unselect' the hands but selecting a hidden radio button
    document.getElementById('start').checked = true;
    games = 0;
    wins = 0;
    losses = 0;
    displayTotals();
    // displayRules();
    updateResultTextArea(`Win, Lose, or Draw...`);
    computerResultImg.src = './assets/question-mark2.png';
}

// show the instructions area and hide the game area
function displayRules() {
    rulesSectionDiv.style.display = 'block';
    playSection.style.display = 'none';
    footerElement.className = '';
}

// show the game area and hide the instructions area
function displayGame() {
    rulesSectionDiv.style.display = 'none';
    playSection.style.display = 'block';
    footerElement.className = 'hidden';
}

// aggregate function
function doChallenge() {
    const userThrow = getUserThrow();
    
    // make sure the user has made a selection
    if (!confirmUserHasChosen(userThrow)) {
        updateResultTextArea('Please select your hand gesture (above)');
        // alert('Please select your gesture (hand)');
        return;
    }

    // get the string describing the computer hand
    const computerThrow = getRandomThrow();

    // display the hand image
    displayComputerThrow(computerThrow);

    // return the win/loss state
    declareWinner(userThrow, computerThrow);

    // update the totals themselves
    updateTotals(userThrow, computerThrow);

    // update the UI with totals
    displayTotals();
}

// obtain the user throw
function getUserThrow() {
    // get the string describing the user hand
    return document.querySelector('input:checked').value;
}

// update the img url
function displayComputerThrow(throwString) {
    computerResultImg.src = './assets/' + throwString + '-computer.png';
}

// make sure user is in a valid state to play
function confirmUserHasChosen(choice = '') {
    return choice === 'start' ? false : true;
}

function embelishResult(theUserThrow, theComputerThrow) {
    if (checkResult(theUserThrow, theComputerThrow) === 'draw')
        return `It's a DRAW`;
    if (checkResult(theUserThrow, theComputerThrow) === 'win')
        return `You WON!!!`;
    if (checkResult(theUserThrow, theComputerThrow) === 'lose')
        return `You LOST :(`;
}

function declareWinner(theUserThrow, theComputerThrow) {
    updateResultTextArea(embelishResult(theUserThrow, theComputerThrow));
}

function updateTotals(theUserThrow, theComputerThrow) {
    games++;
    if (checkResult(theUserThrow, theComputerThrow) === 'win')
        wins++;
    if (checkResult(theUserThrow, theComputerThrow) === 'lose')
        losses++;
}

function displayTotals() {
    totalsTextElement.innerHTML = `Games: ${games}<br>Wins: ${wins}<br>Losses: ${losses}`;
}

function updateResultTextArea(someString) {
    resultTextElement.textContent = someString;
}