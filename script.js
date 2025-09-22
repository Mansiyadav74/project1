const userGuessInput = document.getElementById('userGuess');
const checkBtn = document.getElementById('checkBtn');
const resultDisplay = document.getElementById('result');

checkBtn.addEventListener('click', () => {

    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultDisplay.textContent = 'Please enter a valid number between 1 and 10.'
        ;
        resultDisplay.style.color = 'red';
        return;
    }

    const winningNumber = Math.floor(Math.random() * 10) + 1;
    if (userGuess === winningNumber) {
        resultDisplay.textContent = `Congratulations! You guessed correctly. The number was ${winningNumber}.`;
        resultDisplay.style.color = 'green';
    } else {
        resultDisplay.textContent = `Sorry, you guessed incorrectly. The correct number was ${winningNumber}. Try again!`;
        resultDisplay.style.color = 'red';
    }
});