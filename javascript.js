function getComputerChoice(num){
    if(num<=3) return "rock";
    else if(num>3 && num<=6) return "paper";
    else return "scissors";
}

let num = Math.random()*10;
console.log(getComputerChoice(num));
