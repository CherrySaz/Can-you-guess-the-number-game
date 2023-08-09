let randomNumber = Math.floor(Math.random() * 500) + 1;
let attempts = 0;

let guessInput = getElementById('guessInput');
let checkanswerButton = getElementById('checkanswerButton');
let messagetouser = getElementById('messagetouser');

checkanswerButton.addEventListener('click', ()=> 0 {

    let usersGuess = parseInt (guessInput.value);
})

if isNaN(usersGuess) || usersGuess < 1 || usersGuess > 500 {
    messagetouser = 'Feeling lucky? Guess a number between 1 and 500';
    messagetouser.style.color.'#941631';
    return;
}

userattempts++;

if (usersGuess === randomNumber) {
    messagetouser.textcontent 'Congratulations! You did it! You guessed the number $(randomNumber) in $(attempts)attempts.')
}

