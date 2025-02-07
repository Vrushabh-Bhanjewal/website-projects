let dataCell=document.querySelectorAll('[data-cell]')
let board=document.querySelector(".board")
let message=document.querySelector('.result-message');
let winText=document.querySelector('#winner-name')
let restart=document.querySelector('#reset')
let X_class='x';
let Circle_class='circle'
let circleTurn;
let WINNER=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

restart.addEventListener('click',(e)=>{
    startGame()
})
function startGame(){
    circleTurn=false
    dataCell.forEach((curr)=>{
        curr.classList.remove(X_class)
        curr.classList.remove(Circle_class)
        curr.removeEventListener('click',handleClick)
        curr.addEventListener('click',handleClick,{once:true})
    })
    message.classList.remove('show')
}
startGame()
function handleClick(e){
    let cell=e.target
    let currClass= circleTurn ? Circle_class: X_class;
    //placemark
    placeMark(cell,currClass)
    //win display
    if(checkWin(currClass)){
        endGame(false)
    }else if(isDraw()){
        console.log(isDraw())
        endGame(true)
    }else{
    //swap turn
    swapTurn(currClass)
    // hover o,x
    hoverDisplay()
    }
    //draw display 
}
function placeMark(cell,mark){
    cell.classList.add(mark)
}
function swapTurn(mark){
    circleTurn = !circleTurn
}

function hoverDisplay(){
    board.classList.remove(X_class)
    board.classList.remove(Circle_class)
    if(circleTurn){
        board.classList.add(Circle_class)
    }else{
        board.classList.add(X_class)
    }
}
function checkWin(mark){
    return WINNER.some((curr)=>{
        return curr.every(elem=>{
            return dataCell[elem].classList.contains(mark)
        })
    })
}

function isDraw(){
    let d= [...dataCell].every(curr=>{
        return curr.classList.contains(X_class) ||curr.classList.contains(Circle_class)
    })
    console.log(d)
    return d
}
function endGame(draw){
    if(draw){
        winText.innerText=`Draw`
    }else{
        winText.innerText=`${circleTurn ? "O's Win": "X's Win" }`
    }
    message.classList.add('show')
}