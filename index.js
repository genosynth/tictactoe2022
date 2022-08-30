let gameBoard  = (() => {
    const _board = new Array(9)
    return _board
    }
)()

let toggle = true // TRUE means 1 player1 while FALSE means 2 Player



const PlayerFactory = (marker,name) => {
    this.marker = marker;
    this.name = name;
    return {marker, name}
}

const player1 =  PlayerFactory("X","Player 1")
const player2 =  PlayerFactory("O","Player 2")



const game = ((choice) => {
    
    let board = document.getElementsByClassName("field")
    for (let i=0; i<board.length; i++){
             
        board[i].addEventListener("click", ()=>{
           
            if (gameBoard[i]!=undefined || document.getElementById("winner").innerText.length>1){return} //This is to check for already marked boxes and if there is a winner 
            
            gameBoard[i] = choice
            
           
            for  (let i=0; i<board.length; i++){
                board[i].textContent = gameBoard[i]
            }

            //Draw is checked in the checkWinner function
            if (checkWinner(player1)){
                document.getElementById("restart").style.visibility = "visible"
                return document.getElementById("winner").innerText = checkWinner(player1)}
            
           if (toggle)  {
            if (choice == player2.marker){
                
            }
            cpuPlays()}

                        
            if (checkWinner(player2)){
                document.getElementById("restart").style.visibility = "visible"
                 document.getElementById("winner").innerText = checkWinner(player2)}
            
          
           
            if (!toggle){ 
                if (choice==player2.marker){ return choice=player1.marker}
                if (choice==player1.marker){ return choice=player2.marker}
         }         
            
           
        })
    }

    
    

}
)(player1.marker)

function cpuPlays(){
   
    let random = Math.floor(Math.random() * 9);
    while (gameBoard[random] != undefined) {
        random = Math.floor(Math.random() * 9);
      }

    gameBoard[random] = player2.marker
   
    let board = document.getElementsByClassName("field")
    for  (let i=0; i<board.length; i++){
        board[i].textContent = gameBoard[i]
    }


}

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

function changeGame() {
        
        if (toggle==true){
       
        document.getElementsByClassName("toggle")[0].innerText = "1 Player"
        restart()
        return toggle= false
    }

    if (toggle==false){
        document.getElementsByClassName("toggle")[0].innerText = "2 Players"
        restart()
        return toggle = true
    }

    
}