let gameBoard  = (() => {
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

            //if (checkWinner()){return document.getElementById("winner").innerText ="It's a Draw!"}
            if (checkWinner(player1)){
                document.getElementById("restart").style.visibility = "visible"
                return document.getElementById("winner").innerText = checkWinner(player1)}
            if (checkWinner(player2)){
                document.getElementById("restart").style.visibility = "visible"
                return document.getElementById("winner").innerText = checkWinner(player2)}
            
          
           

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

    if(
        gameBoard[0]!=undefined 
        && gameBoard[1]!=undefined 
        && gameBoard[2]!=undefined 
        && gameBoard[3]!=undefined 
        && gameBoard[4]!=undefined 
        && gameBoard[5]!=undefined 
        && gameBoard[6]!=undefined 
        && gameBoard[7]!=undefined 
        && gameBoard[8]!=undefined 

        ) {
            document.getElementById("restart").style.visibility = "visible"
            return ("It's a Draw!")
        }
    
}

function restart(){
    document.getElementById("restart").style.visibility="hidden"
    document.getElementById("winner").innerText=""
    gameBoard = new Array(9)
    let board = document.getElementsByClassName("field")
    for (let i=0; i<board.length; i++){
        board[i].textContent = ''
    }

    
}