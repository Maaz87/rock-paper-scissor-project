function getcomputer_choice() {
    const max= Math.floor(5);
    const min= Math.ceil(-5);
    const s= Math.floor(Math.random() * 3 );
    if (s===0) {
        console.log("ROCK");
        return "rock";
    }
    else if (s===1) {
        console.log("PAPER");
        return "paper";
    }
    else {
        console.log("SCISSOR");
        return "scissor";
    }
}                      
function gethuman_choice () {
    let c =prompt("Enter Your Choice");
    return c.toLowerCase;
}             

function playround (humanChoice, computerChoice) {
    if(humanChoice==='rock' && computerChoice==='paper')
    {
        computerscore+=1;
    }
    else if (humanChoice==='rock' && computerChoice==='scissor')
    {
        humanscore+=1;
    }
    else if (humanChoice==='paper' && computerChoice==='rock') {
        humanscore+=1;
    }
    else if (humanChoice==='paper' && computerChoice==='scissor') {
        computerscore+=1;
    }
    else if (humanChoice==='scissor' && computerChoice==='rock') {
        computerscore+=1;
    }
    else if (humanChoice==='scissor' && computerChoice==='paper') {
        humanscore+=1;
    }
    else {
        print("Same Choice PlayAgain");
    }
    console.log(computerscore);
    console.log(humanscore);
}

const humanselection=gethuman_choice();
const computerSelection= getcomputer_choice();

let humanscore=0;
let computerscore=0;

console.log("Hello");