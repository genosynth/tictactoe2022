const gameBoard  = (() => {
    const _board = new Array(9)
    return _board
    }
)()


const PlayerFactory = (marker,name) => {
    this.marker = marker;
    this.name = name;
    return {marker, name}
}

const player1 =  PlayerFactory("X","Player 1")
const player2 =  PlayerFactory("O","Player 2")



const game = ((choice) => {
    //let choice = player1.marker
    let board = document.getElementsByClassName("field")
    for (let i=0; i<board.length; i++){
         
    
        board[i].addEventListener("click", ()=>{
            if (gameBoard[i]!=undefined || document.getElementById("winner").innerText.length>1){return} //This is to check for already marked boxes and if there is a winner 
            gameBoard[i] = choice
            console.log(board)
            for  (let i=0; i<board.length; i++){
                board[i].textContent = gameBoard[i]
            }

            if (checkWinner(player1)){return document.getElementById("winner").innerText = checkWinner(player1)}
            if (checkWinner(player2)){return document.getElementById("winner").innerText = checkWinner(player2)}
          
           

           if (choice==player2.marker){ return choice=player1.marker}
           if (choice==player1.marker){ return choice=player2.marker}
           
            
           
        })
    }

    
    

}
)(player1.marker)

function checkWinner(player){
    if (gameBoard[0]==player.marker && gameBoard[1]==player.marker && gameBoard[2]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[0]==player.marker && gameBoard[3]==player.marker && gameBoard[6]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[0]==player.marker && gameBoard[4]==player.marker && gameBoard[8]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[2]==player.marker && gameBoard[5]==player.marker && gameBoard[8]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[6]==player.marker && gameBoard[7]==player.marker && gameBoard[8]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[1]==player.marker && gameBoard[4]==player.marker && gameBoard[7]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[2]==player.marker && gameBoard[4]==player.marker && gameBoard[6]==player.marker){return(`${player.name} Wins`)}
    if (gameBoard[3]==player.marker && gameBoard[4]==player.marker && gameBoard[5]==player.marker){return(`${player.name} Wins`)}
}

function restart(){
    document.getElementById("winner").innerText=""
    console.log("fuck")
}