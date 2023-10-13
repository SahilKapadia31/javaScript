// Q-1 Write a program using prompt function to take input of age as a value from the user 
// and use alert to tell him if he can drive! 

let age = prompt("Enter your age.", "56"); //second parameter is default value.
age = Number.parseInt(age);

const canDrive = (age) => {
    return age >= 18 ? true : false
}

if (canDrive(age)) {
    alert("Yes, you can drive.")
}
else {
    alert("NO, you can not drive.")
}

// Q-2 In q-1 use confirm to ask the user if he wants to see the prompt again?

let runAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false
}
while (runAgain) {
    let age = prompt("Enter your age.", "56");
    age = Number.parseInt(age);

    if (canDrive(age)) {
        alert("Yes, you can drive.")
    }
    else {
        alert("NO, you can not drive.")
    }
    runAgain = confirm("Do you want to play again?")
}

// Q-3 In the previous question, use console.error to log the error if the age entered is negative.

let runAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false
}

while (runAgain) {
    let age = prompt("Enter your age.", "56");
    age = Number.parseInt(age);

    if (age < 0) {
        console.error("please enter the valid input");
        alert('please enter the valid input');
        break;
    }
    if (canDrive(age)) {
        alert("Yes, you can drive.")
    }
    else {
        alert("NO, you can not drive.")
    }
    runAgain = confirm("Do you want to play again?")
}

// Q-4 Write a program to change the url to google.com(redirection) if users enters a number greater than 4.

let num = prompt("Enter num.");
num = Number.parseInt(num);

if (num > 4) {
    location.href = "http://youtube.com"
    // window.location = "youtube.com";   you an write this way too.
}

// Q-5 Change the background of the page to yellow, red or any other color based on user input through prompt.

let color = prompt("Enter the color");
document.body.style.background = color;

// Q-6 Use js to create a game of ROCK, PAPER & SCISSOR. The game should ask you to enter R,P or S.
// The computer should be able to randomly generate R,P or S and declare win or loss using alert.
// Use confirm and prompt wherever required. 

// Play the game when the user confirms
if (confirm("Do you want to play Rock, Paper, Scissors?")) {
    playGame();
} else {
    alert("Thanks for playing!");
}

function playGame() {
    // Get user's choice
    let userChoice = prompt("Enter R for Rock, P for Paper, or S for Scissors:").toUpperCase();

    // Validate user input
    if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
        alert("Invalid choice. Please enter R, P, or S.");
        playGame();
    }

    // Generate a random choice for the computer
    const randomNum = Math.random();
    let computerChoice = "";
    if (randomNum >= 0 && randomNum < 1 / 3) {
        computerChoice = "R";
    }
    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computerChoice = "P";
    }
    else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerChoice = "S";
    }

    // let computerChoices = ["R", "P", "S"]; // YOU CAN DO THIS WAY TOO.
    // console.log(Math.random() * 3)
    // let computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Display the results
    alert(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`); //use of template string

    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    }
}


