
        let humanscore = 0;
        let computerscore = 0;

const rck=document.querySelector(".rock");
const ppr=document.querySelector(".paper");
const scr=document.querySelector(".scissor");



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


const result = document.querySelector(".res");

const h2 = document.createElement("h2");
const msg = document.createElement("p");
const hum_sc = document.createElement("p");
const com_sc = document.createElement("p");
h2.textContent="Score";
hum_sc.textContent="You:"+humanscore;
com_sc.textContent="Computer: " + computerscore;
result.appendChild(h2);

function playRound(humanChoice) {

    const computerChoice= getcomputer_choice();
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
    msg.textContent = "Same choice Play Again";
  }

   hum_sc.textContent="You:"+humanscore;
com_sc.textContent="Computer: " + computerscore;

    if (humanscore === 5) {
    msg.textContent = "You win the game!";
} else if (computerscore === 5) {
    msg.textContent = "Computer wins the game!";
}

 }


rck.addEventListener('click', () =>  playRound("rock"));
ppr.addEventListener('click', () =>  playRound("paper"));
scr.addEventListener('click', () =>  playRound("scissor"));







result.appendChild(hum_sc);
result.appendChild(com_sc);
result.appendChild(msg);