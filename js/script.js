const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const numberInput = document.querySelector('.number-input');
const guessNumber = Math.trunc(Math.random() * 20 + 1)
const score = document.querySelector('.score');
let count = 20
console.log(guessNumber)

function guessTheNumber() {    
    let userNumber = Number(numberInput.value)
    if (count > 1) {
    if (!userNumber) {
        alert('Enter number.')
    } else if (userNumber === guessNumber) {
        document.querySelector('.question').textContent = 'You win!'               
    } else if (userNumber < guessNumber) {        
        count--
        score.textContent = count
        document.querySelector('.question').textContent = 'not enough'        
    } else if (userNumber > guessNumber) {
        count--
        score.textContent = count
        document.querySelector('.question').textContent = 'too much'
    }
    } else {        
        score.textContent = 0
        document.querySelector('.question').textContent = 'Game over!'
        }    
}

btnCheck.addEventListener('click', guessTheNumber)