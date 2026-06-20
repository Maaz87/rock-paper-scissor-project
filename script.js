let humanscore = 0;
let computerscore = 0;

function getcomputer_choice() {
  const max = Math.floor(5);
  const min = Math.ceil(-5);
  const s = Math.floor(Math.random() * 3);
  if (s === 0) {
    return "rock";
  } else if (s === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}
function gethuman_choice() {
  let c = prompt("Enter Your Choice");
  return c.toLowerCase();
}



function playgame() {
  let humanscore = 0;
  let computerscore = 0;

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

