const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const numberInput = document.querySelector('.number-input');
let guessNumber = Math.trunc(Math.random() * 20 + 1)
const score = document.querySelector('.score');
let count = 20
console.log(guessNumber)

function guessTheNumber() {    
    let userNumber = Number(numberInput.value)
    if (count > 1) {
    if (!userNumber) {
        alert('Enter number.')
    } else if (userNumber === guessNumber) {
        // count--
        score.textContent = count
        document.querySelector('.question').textContent = 'You win!'
        document.querySelector('body').style.backgroundColor = 'rgb(114, 69, 86)'
        document.querySelector('.question').style.width = '60rem'
        document.querySelector('.highscore').textContent = count
    } else if (userNumber < guessNumber) {        
        count--
        score.textContent = count
        document.querySelector('.question').textContent = 'not enough'
        document.querySelector('.question').style.width = '50rem'
    } else if (userNumber > guessNumber) {
        count--
        score.textContent = count
        document.querySelector('.question').textContent = 'too much'
        document.querySelector('.question').style.width = '50rem'
    }
    } else {        
        score.textContent = 0
        document.querySelector('.question').textContent = 'Game over!'
        }    
    }

btnCheck.addEventListener('click', guessTheNumber)
btnAgain.addEventListener('click', () => {
    count = 20
    guessNumber = Math.trunc(Math.random() * 20 + 1)
    console.log(guessNumber)
    numberInput.value = ''
    score.textContent = count
    document.querySelector('.question').textContent = '???'
    document.querySelector('body').style.backgroundColor = 'rgb(69, 114, 112)'
 })