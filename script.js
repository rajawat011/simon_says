
let startBtn = document.getElementById('start');
let reset = document.getElementById("reset" );
let playAgainBtn = document.getElementById("play-again")

let colorArr = ['red', 'yellow', 'green', 'blue'];
let gameStarted = false;
let computerchoice =[];
let userchoice = [];
let color = "";

let score = 0;

document.addEventListener('click', (e) => {
    
    if (e.target.id == "start") {
        if (gameStarted == false) {
            startGame()
            blink(computerchoice[0])
        };   
            
    }
    
    if (colorArr.includes(e.target.id)) {
        userchoice.push(e.target.id)
        console.log("userchose",userchoice);
        if (computerchoice.length == userchoice.length) {


            verifying()
            console.log("computer choose",computerchoice);


            userchoice = [];


            for (let i = 0; i < computerchoice.length; i++) {
                setTimeout  (()=>{
                    blink(computerchoice[i])
                }, 1000 * i)
            };

        };

    }
    
    if (e.target.id == "play-again") {
        playAgain()
    
    }

});


function playAgain() {
    
    reset.classList.add('display');

    playAgainBtn.classList.add('display');

    setTimeout( () => {
        startGame()
        blink(computerchoice[0])


    }, 1000)
   

    
}

function gameOver() {
    console.log("game over")
    reset.classList.remove("display");
    playAgainBtn.classList.remove('display');
    computerchoice = []
}


function verifying() {
    for (let i = 0; i < computerchoice.length; i++) {

        if (computerchoice[i] !== userchoice[i]) {
            console.log("wrong");
            score > 0 ? (startBtn.innerText = --score) : gameOver();
            return; 
        }
    }

    console.log("all correct");
    startBtn.innerText = ++score;
    computerselect(randomNumber());
}


function startGame(){
    gameStarted = true;
    computerselect(randomNumber());
    startBtn.classList.remove('score');
    startBtn.innerText = score;
}

function blink(color) {
    setTimeout (()=>{
        document.getElementById(color).classList.add('blink')
    }, 500);
    setTimeout (()=>{
        document.getElementById(color).classList.remove('blink')
    }, 1000);
}




function randomNumber() {
    return Math.floor(Math.random()*4);
};


function computerselect(boxNum) {

    switch(boxNum) {

        case 0 : 
            color = "red";
            computerchoice.push(color);
            
        break;

        case 1 :
            color = "yellow";
            computerchoice.push(color);
            
        break;

        case 2 : 
            color = "green";
            computerchoice.push(color);
            
        break;

        case 3 :
            color = "blue";
            computerchoice.push(color);
        break;

    };

};




























































