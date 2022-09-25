let box= document.querySelectorAll(".box")
let reset = document.getElementById('reset');

const player = (name, mark) => {
    return{name,mark};
}


const gameBoard = (() => {
    let board =['','','','','','','','',''];
    return {
      board
      };
  })();
 
    let playerOne = player('as', 'X');
    let playerTwo = player('s', 'O');
    let activePlayer=playerTwo;
    
       const addPlayer = (() => {
        document.getElementById("submit").addEventListener("click",function addP(evt){
            evt.preventDefault();
            let names = document.getElementById("names").value;
            let authors = document.getElementById("authors").value;
            playerOne = player(names, 'X');
            playerTwo = player(authors, 'O');
            document.getElementById("names").value ='';
            document.getElementById("authors").value ='';
            document.getElementById("form").style.display = "none";
            document.getElementById("container").style.display = "flex";
            document.getElementById("reset").style.display = "block";
        })
    
        return {
          playerOne,
          playerTwo
          };
      })();
    


  const game = (() => {
    const switchPlayer = ()=>{
        if(activePlayer != playerOne ){
            activePlayer = playerOne;
        }
        else{
            activePlayer = playerTwo;
        }
     
    }
    
    const playerClick = (player) =>{
        let a= event.srcElement.id;
        const boxy = document.getElementById(a);
        let b= boxy.getAttribute('data-number');
        if(gameBoard.board[b]==='')
        {
        let b= boxy.getAttribute('data-number');
        boxy.innerHTML = activePlayer.mark;
        gameBoard.board[b] = activePlayer.mark;
        checkWinner();
        switchPlayer();
        }

     
    }
    let subtext=document.getElementById("subtext");
    let winnerDeclared =false;
    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    // check winner
    function checkWinner() {
        winningAxes.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
            if (gameBoard.board[item[0]] === activePlayer.mark && gameBoard.board[item[1]] === activePlayer.mark && gameBoard.board[item[2]] === activePlayer.mark) {
                console.log('winner!');
                subtext.innerHTML = `${activePlayer.name} wins!`;
                reseto();

            } 
        })
    }

    function reseto(){
        document.getElementById("reset").addEventListener("click",function reset(){
            gameBoard.board=['','','','','','','','',''];
        document.getElementById('zero').innerHTML='';
        document.getElementById("one").innerHTML='';
        document.getElementById("two").innerHTML='';
        document.getElementById("three").innerHTML='';
        document.getElementById("four").innerHTML='';
        document.getElementById("five").innerHTML='';
        document.getElementById("six").innerHTML='';
        document.getElementById("seven").innerHTML='';
        document.getElementById("eight").innerHTML='';
        document.getElementById("subtext").innerHTML=''; 
        document.getElementById("form").style.display = "flex";
        document.getElementById("container").style.display = "none";
        document.getElementById("reset").style.display = "none";
        activePlayer=playerTwo;
        })
      
    }

    


    return {
      activePlayer,
      playerClick,
      switchPlayer,
      subtext,
      winnerDeclared,
      winningAxes,
      checkWinner,
      reseto
      };
  })();

  function reseto(){
    gameBoard.board=['','','','','','','','',''];
    document.getElementById('zero').innerHTML='';
    document.getElementById("one").innerHTML='';
    document.getElementById("two").innerHTML='';
    document.getElementById("three").innerHTML='';
    document.getElementById("four").innerHTML='';
    document.getElementById("five").innerHTML='';
    document.getElementById("six").innerHTML='';
    document.getElementById("seven").innerHTML='';
    document.getElementById("eight").innerHTML='';
    document.getElementById("subtext").innerHTML='';
}


