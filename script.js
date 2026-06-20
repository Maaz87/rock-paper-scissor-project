let humanscore = 0;
let computerscore = 0;

function getcomputer_choice() {
 
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}
function gethuman_choice() {
  let choice = prompt("Enter Your Choice");
  return choice.toLowerCase();
}

function playround(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerscore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    humanscore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanscore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerscore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerscore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanscore += 1;
  } else {
    console.log("Same Choice PlayAgain");
  }


function playgame() {
  let humanscore = 0;
  let computerscore = 0;
 

}
  for(let i=1 ; i<=5; i++) {
    const humanselection = gethuman_choice();
    const computerSelection = getcomputer_choice();
    playround(humanselection, computerSelection);
  }

    console.log("Computer Score = " + computerscore);
    console.log("Human Score = " + humanscore);

  if(humanscore>computerscore){
    console.log("Congrats Human Wins");
  }
  else {
    console.log("Computer Wins");
  }
  
}

playgame();

