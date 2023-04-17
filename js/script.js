const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const numberInput = document.querySelector('.number-input');
let guessNumber = Math.trunc(Math.random() * 20 + 1)
const score = document.querySelector('.score');
let count = 20
let highscore = 0

function guessTheNumber() {    
    let userNumber = Number(numberInput.value)
    if (count > 1) {
    if (!userNumber) {
        alert('Enter number.')
    } else if (userNumber === guessNumber) {
        numberInput.disabled = true
        score.textContent = count        
        document.querySelector('.question').textContent = 'You Win!'
        document.querySelector('body').style.backgroundColor = 'rgb(114, 69, 86)'
        document.querySelector('.question').style.width = '100rem'
        if (count > highscore) {
            highscore = count
            document.querySelector('.highscore').textContent = highscore
         }        
    } else if (userNumber < guessNumber) {        
        count--
        score.textContent = count
        document.querySelector('.question').textContent = 'Too Low'
        document.querySelector('.question').style.width = '50rem'
    } else if (userNumber > guessNumber) {
        count--
        score.textContent = count
        document.querySelector('.question').textContent = 'Too High'
        document.querySelector('.question').style.width = '50rem'
    }
    } else {
        numberInput.disabled = true
        score.textContent = 0
        document.querySelector('.question').textContent = 'Game Over!'
        document.querySelector('.question').style.width = '100%'
        document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)'
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
    document.querySelector('.question').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = 'rgb(69, 114, 112)'
    numberInput.disabled = false
 })