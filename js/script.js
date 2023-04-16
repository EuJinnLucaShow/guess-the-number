const btnAgain = document.querySelector('.again');
const elLeft = document.querySelector('.left');
const guessNumber = Math.trunc(Math.random() * 20 + 1)

function numberInput() { 
    let userNumber = Number(elLeft.firstElementChild.value)
    if (!userNumber) {
        alert('Enter number.')
    } else if (userNumber === guessNumber) {
         document.querySelector('.question').textContent = 'You win!'
    } else if (userNumber < guessNumber) { 
        document.querySelector('.question').textContent = 'not enough'
    } else if (userNumber > guessNumber) { 
        document.querySelector('.question').textContent = 'too much'
    }
}

elLeft.lastElementChild.addEventListener('click', numberInput)