function getComputerChoice(num){
    if(num<=3) return "rock";
    else if(num>3 && num<=6) return "paper";
    else return "scissors";
}

let num = Math.random()*10;
console.log(getComputerChoice(num));


function humanChoice(n){
    if(n<=3) return "rock";
    else if(n>3 && n<=6) return "paper";
    else return "scissors";
}

let n = parseInt(prompt("enter a number"));
console.log(humanChoice(n));
