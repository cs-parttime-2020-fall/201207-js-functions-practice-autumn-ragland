console.log("20 12 07 JS Functions Practice"); // check that files are linked

// Exercise 1 : Function without Parameters
// Declare a function main that alerts the message "20 12 07 JS Functions Practice".
function main(){
    alert("20 12 07 JS Functions Practice");
    alertMessage("Howdy!"); // calling ex 2 function
    whileLoopPrompt(); // calling ex 3 function
}
main(); // calling ex 1 function

// Exercise 2 : Function with Parameters
// Declare a function alertMessage that accepts one parameter and alerts the message "Your message is [PARAM]". Call this function in the main function.
function alertMessage(message){
    alert(`Your message is ${message}`);
}

// Exercise 3 : Functions with Added Logic
// Declare a function whileLoopPrompt that prompts a user to enter any value until they enter q. Once the user enters q alert the message "You entered q". Call this function in the main function.
function whileLoopPrompt(){
    let userInput = prompt("Enter q to quit"); // prompting user
    while(userInput != "q"){ // as long as the user does NOT enter q
        userInput = prompt("Enter q to quit"); // prompt
    }
    alert("You entered q!"); // once they break out of the loop
}

// Exercise 4 : Functions with a Return Value
// Declare a function isDivisibleBy2 that takes one parameter and returns true if the parameter is divisible by 2 and false if the parameter is not divisible by 2. Prompt the user to enter a number. Call the function isDivisibleBy2 passing in the user's number and save the return value. Alert the message "It is [RETURN_VALUE] that [USER_NUM] is divisible by 2"
function isDivisibleBy2(num){
    // check if parameter is evenly divisible by 2
    if(num % 2 == 0){ 
        return true;
    } else {
        return false;
    }
}
let userNum = parseInt(prompt("Enter a number")); // prompt user
let userNumIsDivisibleBy2 = isDivisibleBy2(userNum); // call function and save the return value
alert(`It is ${userNumIsDivisibleBy2} that ${userNum} is divisible by 2`);