function playGame(playerChoice){
    // const choices = ["Rock", "Paper", "Scissors"];
    //const playerOneChoice = document.getElementById("playerOneChoice").value;
    //const playerTwoChoice = document.getElementById("playerTwoChoice").value;
    const playerOneDisplay = document.getElementById("playerOneDisplay");
    const playerTwoDisplay = document.getElementById("playerTwoDisplay");
    const resultDisplay = document.getElementById("resultDisplay");

    
    //playerOneDisplay.textContent = `Player 1 : ${playerChoice}`;
    //console.log(playerOneDisplay);
    //playerTwoDisplay.textContent = `Player 2 : ${playerChoice}`;
    //console.log(playerTwoDisplay);
    //let result;

    if(playerTwoDisplay.textContent === "Player 2 : "){
        playerOneDisplay.textContent = `Player 1 :  Choice made`;
        playerTwoDisplay.textContent = "Player 2 : Choosing";
        resultDisplay.textContent = "Result : Player 2's turn...";
        // "window" gives the users time to choose, if not, the choice of player 1 would display immediatly and player 2 would always be able to win.
        window.playerOneChoice = playerChoice;
    }else{
        const playerOneChoice = window.playerOneChoice;
        const playerTwoChoice = playerChoice;
        playerOneDisplay.textContent = `Player 1 : ${playerOneChoice}`;
        console.log(playerOneDisplay);
        playerTwoDisplay.textContent = `Player 2 : ${playerTwoChoice}`;

        let result;

        if(playerOneChoice === playerTwoChoice){
            result = "Draw.";
        }else if(
            (playerOneChoice === "Rock" && playerTwoChoice === "Scissors")||
            (playerOneChoice === "Paper" && playerTwoChoice === "Rock")||
            (playerOneChoice === "Scissors" && playerTwoChoice === "Paper")
         ){
        result = "Player 1 wins!";
        }else{
        result = "Player 2 Wins"
        }
        resultDisplay.textContent = `Result : ${result}`;

        setTimeout(() => {
        playerOneDisplay.textContent = "Player 1 : ";
        //console.log("Delayed for 3 seconds.");
        playerTwoDisplay.textContent = "Player 2 : ";
        resultDisplay.textContent = "Result : ";
        window.playerOneChoice = null;
        }, 2000);
    }
}