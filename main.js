var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else { 
      console.log('Sorry, not an option');
    }
}

// console.log(getUserChoice('Banana'));

var getComputerChoice = function () {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    } 
}

//console.log(getComputerChoice());

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie! Try again.';
    }
    if (userChoice === 'bomb') {
        return 'You annihilated the computer! HAHAHA!'
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Well, the computer won.'
        } else {
            return 'Congrats! You won.'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won.'
        } else {
            return 'You won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer wins.'
        } else {
            return 'You won!'
        }
    }
}

// console.log(determineWinner('rock', 'paper'));
// console.log(determineWinner('scissors', 'scissors'));

var playGame = function () {
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();
    console.log(`You picked: ${userChoice}`);
    console.log(`Computer picked: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
