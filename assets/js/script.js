// Generate a random number between 1 and 500
let randomNumber = Math.floor(Math.random() * 500) + 1;
let userAttempts = 0;

// Get references to HTML elements
let guessInput = document.getElementById('guessInput');
let checkanswerButton = document.getElementById('checkanswerButton');
let messagetouser = document.getElementById('messagetouser');

// Add event listener to the "Check Answer" button
checkanswerButton.addEventListener('click', () => {
    // Get the user's guessed number
    let usersGuess = parseInt(guessInput.value);

    // Check user's guess
    if (isNaN(usersGuess) || usersGuess < 1 || usersGuess > 500) {
        messagetouser.textContent = 'Feeling lucky? Guess a number between 1 and 500';
        messagetouser.style.color = '#D85266';
        return;
    }

    // Increment user attempts
    userAttempts++;

    // Compare user's guess with the random number
    if (usersGuess === randomNumber) {
        messagetouser.textContent = `Congratulations! You did it! You guessed the number ${randomNumber} in ${userAttempts} attempts.`;
        messagetouser.style.color = '#D85266';
        guessInput.disabled = true;
        checkanswerButton.disabled = true;
    } else if (usersGuess < randomNumber) {
        messagetouser.textContent = 'Maybe pick a higher number.';
        messagetouser.style.color = 'violet';
    } else {
        messagetouser.textContent = 'Maybe pick a lower number.';
        messagetouser.style.color = 'blue';
    }
});

