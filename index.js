const gameBoard  = (() => {
    const _board = new Array(9)
    return _board
    }
)()


const PlayerFactory = (marker) => {
    this.marker = marker;
    return {marker}
}

const player1 =  PlayerFactory("X")
const player2 =  PlayerFactory("O")



const game = (() => {
    let board = document.getElementsByClassName("field")
    for (let i=0; i<board.length; i++){
        board[i].addEventListener("click", ()=>{
            gameBoard[i] = player1.marker
            console.log(board)
            for  (let i=0; i<board.length; i++){
                board[i].textContent = gameBoard[i]
            }
        })
    }
    

}
)()
