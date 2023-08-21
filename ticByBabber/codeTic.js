const boxes= document.querySelectorAll('.box');
const gameInfo = document.querySelector('.gameinfo');
const newGamebutton = document.querySelector('.btn');

let currentPlayer;
let gameGrid;
const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// function to intilizing game 
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box,index) => {
        box.innerText = " ";
        boxes[index].style.pointerEvents = "all";
        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
        
    })
    // newGamebutton.classList.remove("active");
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
   
}

initGame();

function swapTurn(){
    if(currentPlayer=== "X"){
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }
    gameInfo.innerText= `current player - ${currentPlayer}`;
}


function checkWinner(){
    let answer = "";
    winningPosition.forEach((position)=> {
        if( (gameGrid[position[0]]  !=="" || gameGrid[position[1]] !=="" || gameGrid[position[2]] !=="") && (gameGrid[position[0]]=== gameGrid[position[1]]) && (gameGrid[position[1]]=== gameGrid[position[2]])){
            if (gameGrid[position[0]]==="X")
            answer= "X";
          else
           answer = "O";

           boxes.forEach((box) =>{
            box.style.pointerEvents = "none"
           } )


        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");

        if(answer !==""){
          gameInfo.innerText = `winner is - ${answer}`
          newGamebutton.classList.add("active")
          return;
        //   boxes[position[0]].classList.remove("win")
          

        }
        let fillCount = 0;
        gameGrid.forEach((box)=>{
            if(box !== "")
                fillCount++;
            
        });
        if (fillCount === 9){
            gameInfo.innerText = "GAME TIE";
        }





 
        }
     })
}





function handleClicked(index){
    if(gameGrid[index]=== ""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkWinner();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClicked(index);
    })
})

// newGamebutton.addEventListener("click", initGame)
    

