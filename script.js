
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let startBtn = document.getElementById('circle')
let colorBtn = document.querySelectorAll(".btn")

let colorArr = ['red', 'yellow', 'green', 'blue']
let gameStart = true;
let computerchoice =[]
let userchoice = []
let color = "";

let score = 0;


function startGame(){

    startBtn.classList.remove('score');
    startBtn.innerText = score;
}


startBtn.addEventListener('click', ()=>{
    startGame()
    if(gameStart == true && score == 0) {
        computerselect(randomNumber())
    }
    gameStart = false;
});


function randomNumber() {
    return Math.floor(Math.random()*4);
}


function computerselect(boxNum) {

    switch(boxNum) {

        case 0 : 
            color = "red"
            computerchoice.push(color)
            setTimeout (()=>{
                red.classList.add('blink')
            },500)
            setTimeout (()=>{
                red.classList.remove('blink')
            },1000)
        break;

        case 1 :
            color = "yellow"
            computerchoice.push(color)
            setTimeout (()=>{
                yellow.classList.add('blink')
            },500)
            setTimeout (()=>{
                yellow.classList.remove('blink')
            },1000)
        break;

        case 2 : 
            color = "green"
            computerchoice.push(color)
            setTimeout (()=>{
               green.classList.add('blink')
            },500)
            setTimeout (()=>{
               green.classList.remove('blink')
            },1000)
        break;

        case 3 :
            color = "blue"
            computerchoice.push(color)
            setTimeout (()=>{
               blue.classList.add('blink')
            },500)
            setTimeout (()=>{
               blue.classList.remove('blink')
            },1000)
        break;

    }

}

document.addEventListener('click', (e) =>{

    if(gameStart == false && colorArr.includes(e.target.id) ) {
        userchoice.push(e.target.id)
        computerselect(random)
    }

})

console.log(userchoice);
console.log(computerchoice);


