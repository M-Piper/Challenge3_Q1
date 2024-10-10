const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Function creates a random number between 1 and 15
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function main() {
    //instantiate variables num1 and num2, each with a random integer between 1 and 15
    let num1 = getRandomInt(1, 15);
    let num2 = getRandomInt(1, 15);

    //add the integers together and multiply by 3
    let result = (num1 + num2) * 3;

    //display resulting figure
    console.log("The value of the first variable, ", num1, "plus the second variable, ", num2, ", multiplied by three is: ", result);

    if (result > 50) {
        console.log("The resulting value is greater than 50.")
    } else if (result == 50) {
        console.log("The resulting value is exactly 50")
    }
    else {
        console.log("the resulting value is less than 50.")
    }
}

// Function to ask user input
function askUser() {
    rl.question("Would you like to restart the program (s) or exit (x)? ", (answer) => {
        if (answer.toLowerCase() === 'x') {
            console.log("Exiting the program.");
            rl.close(); // Close the readline interface
        } else if (answer.toLowerCase() === 's') {
            console.log("Restarting the program...");
            main();
            askUser(); // Ask again after running the program
        } else {
            console.log("Invalid input. Please enter 's' to restart or 'x' to exit.");
            askUser(); // Ask again for valid input
        }
    });
}

// Run the program initially and ask the user
main();
askUser();