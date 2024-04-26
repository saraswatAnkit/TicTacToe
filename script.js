console.log("welcome to Tic Tac Toe")
let musicTurn = new Audio("glass-ding.mp3")
let musicGame = new Audio("blues-guitar.mp3")
let musicEnd = new Audio("success.mp3")
let turn = "X"
let gameover = false;

// Function to change the turn
const changeTurn =()=>{
    return turn ==="X"?"0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('iframe')[0].style.width = "26vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate( ${e[5]}deg)`
            document.querySelector(".line").style.width = `20vw`
            document.querySelector(".btn").style.background = "rgb(3, 196, 245)"
            document.getElementById("reset").addEventListener("mouseover", ()=>{
                document.getElementById("reset").style.background = "black";
                musicEnd.play()
            });
        }
    })
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            // musicTurn.play();
            checkWin();
            if(!gameover)
            document.getElementsByClassName("Info")[0].innerHTML = "Turn for " + turn;
        }
    })
})

// Add click listener to reset button
reset.addEventListener('click',(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=> {
        element.innerHTML = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("Info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('iframe')[0].style.width = "0vw";
    document.querySelector(".line").style.width = `0vw`

})