const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor((Math.random()*options.length))];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection==computerSelection) {
        return "Tie";
    }
    else if((playerSelection=="rock" && computerSelection=="scissors") || (playerSelection=="scissors" && computerSelection=="paper") || (playerSelection=="paper" && computerSelection=="rock")){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if(result=="Tie") {
        return "Its a tie mf!";
    }
    else if(result == "Player") {
        return "Mubarakan";
    }
    else {
        return "chi yawr har gye";
    }
  }

  
  
  function getPlayerChoice(){
    let validIn = false;
    while(validIn==false){
        const choice = prompt("Rock , paper or scissors? ek choose kar bkl");
        if(choice==null){ 
            continue;
        }
        const choiceInLower = choice.toLowerCase(); 
        if(options.includes(choiceInLower)) {
            validIn = true;
            return choiceInLower;
        }
    }
  }

  function game(){
    let scorePlayer = 0;
    let scoreComputer  = 0;
    console.log("Welcome!");
    for(let i = 0;i<5;i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("-------------------");

        if(checkWinner(playerSelection,computerSelection)=="Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection)=="Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over!");
    if(scorePlayer>scoreComputer){
        console.log("meri selection hogyi!!!!!!!!");
    }
    else if(scorePlayer<scoreComputer){
        console.log("hag diya");
    }
    else{
        console.log("chalo haare toh nahi");
    }
  }

  game();
