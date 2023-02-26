/* The Rock, Paper, Scissors game is pretty much the Python one I did but I am starting to get use to manipulating the DOM which is the actual learning happening here. Also, just coding in vanilla JS is the learning too*/

// Constants for Random Numbers and for User Choice
const min = 1;
const max = 3;
let user_choice = "";

// Rock Button
const rock_btn = document.querySelector(".rock");
function rock_selected() {
  console.log("Button Clicked");
  if (rock_btn.textContent === "Rock") {
    user_choice = "Rock";
    results(user_choice);
  } 
}

// Paper Button
const paper_btn = document.querySelector(".paper");
function paper_selected() {
  console.log("Button Clicked");
  if (paper_btn.textContent === "Paper") {
    user_choice = "Paper";
    results(user_choice);
  } 
}

// Scissors Button
const scissors_btn = document.querySelector(".scissors");
function scissor_selected() {
  console.log("Button Clicked");
  if (scissors_btn.textContent === "Scissors") {
    user_choice = "Scissors";
    results(user_choice);
  } 
}

// Computer Selects
function computer_selects() {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // generates a random number between 1 and 3 
  if (randomNumber === 1) {
    return ("Rock");
  }
  else if (randomNumber === 2) {
    return ("Paper");
  }
  else if (randomNumber === 3) 
    return ("Scissors");
}

function results(user_choice) {
  let computer_result = computer_selects();
  console.log("This is player choice: " + user_choice);
  console.log("This is computer choice: " + computer_result);

  // User Chose Rock
  if (user_choice === "Rock" && computer_result === "Rock") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "Draw!";
    computer_chosen.textContent = "Computer choses: Rock";

  }
  else if (user_choice === "Rock" && computer_result === "Paper") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "You Lose!";
    computer_chosen.textContent = "Computer choses: Paper";
  }
  else if (user_choice === "Rock" && computer_result === "Scissors") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "You Won!";
    computer_chosen.textContent = "Computer choses: Scissors";
  }

  // User Chose Paper
  if (user_choice === "Paper" && computer_result === "Rock") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "You Won!";
    computer_chosen.textContent = "Computer choses: Rock";
  }
  else if (user_choice === "Paper" && computer_result === "Paper") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "Draw!";
    computer_chosen.textContent = "Computer choses: Paper";
  }
  else if (user_choice === "Paper" && computer_result === "Scissors") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "You Lose!";
    computer_chosen.textContent = "Computer choses: Scissors";
  }

  // User Chose Scissors
  if (user_choice === "Scissors" && computer_result === "Rock") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "You Lose!";
    computer_chosen.textContent = "Computer choses: Rock";
  }
  else if (user_choice === "Scissors" && computer_result === "Paper") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "You Won!";
    computer_chosen.textContent = "Computer choses: Paper";

  }
  else if (user_choice === "Scissors" && computer_result === "Scissors") {
    const results_section = document.querySelector(".results");
    const computer_chosen = document.querySelector(".computer_chose");
    results_section.textContent = "Draw!";
    computer_chosen.textContent = "Computer choses: Scissors";
  }
}

// Buttons themselves call unto results function so that everytime I hit a button it will redo results
rock_btn.addEventListener("click", rock_selected);
paper_btn.addEventListener("click", paper_selected);
scissors_btn.addEventListener("click", scissor_selected);







// setInterval continually checks if the button is being clicked instead of a while loop 
// const checkUserChoice = setInterval(function() {
//   if (user_choice !== "") {
//     clearInterval(checkUserChoice);
//     results(user_choice);
//   }
// }, 100);

// while loop would be problematic because it blocks all other code and functions that the user would
// use so the UI would not be able to respond; whereas, the setInterval checks PERIODICALLY the value 
// and does not block all other code so the UI is staying responsive



