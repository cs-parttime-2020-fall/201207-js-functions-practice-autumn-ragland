console.log("20 12 07 JS Functions Practice"); // check that files are linked

// Function without Parameters
// Declare a function main that alerts the message "20 12 07 JS Functions Practice".

// declare main function
function main(){
    alert(`20 12 07 JS Functions Practice`);
    alertMessage("Howdy"); // calling ex 2 function
    whileLoopPrompt(); // calling ex 3 function
}
main(); // call main function

// Function with Parameters
// Declare a function alertMessage that accepts one parameter and alerts the message "You message is [PARAM]". Call this function in the main function.

// declare function with one param
function alertMessage(message){
    alert(`You message is ${message}`);
}

// Functions with Added Logic
// Declare a function whileLoopPrompt that prompts a user to enter any value until they enter q. Once the user enters q alert the message "You entered q". Call this function in the main function.
function whileLoopPrompt(){
    let userInput = prompt("Enter q to quit");
    while(userInput != "q"){
        userInput = prompt("Enter q to quit");
    }
    alert(`You entered q`);
}

// Functions with a Return Value
// Declare a function isDivisibleBy2 that takes one parameter and returns true if the parameter is divisible by 2 and false if the parameter is not divisible by 2. Prompt the user to enter a number. Call the function isDivisibleBy2 passing in the user's number and save the return value. Alert the message "It is [RETURN_VALUE] that [USER_NUM] is divisible by 2"

// declaring function with conditional logic and return value
function isDivisibleBy2(num){
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

// prompt user for input
let userNum = parseInt(prompt("Enter a number"));

// call function and save return value in variable
let userNumIsDivisible = isDivisibleBy2(userNum);

// use return value and user input in formatted message
alert(`It is ${userNumIsDivisible} that ${userNum} is divisible by 2`);