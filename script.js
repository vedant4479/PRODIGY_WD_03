console.log("Welcome to Tic Tac Toe")
let music = new Audio("Pikachu.mp3")
let turn = "X"
let gameOver = false;

const changeTurn = ()=>{
    return turn==="X"?"O": "X"
} 

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X"
    gameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw";

})