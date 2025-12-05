
// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow');
// let green = document.getElementById('green');
// let blue = document.getElementById('blue');
// let startBtn = document.getElementById('start');
// let colorBtn = document.querySelectorAll(".btn");

// let colorArr = ['red', 'yellow', 'green', 'blue'];
// let gameStarted = false;
// let computerchoice =[];
// let userchoice = [];
// let color = "";

// let score = 0;






// document.addEventListener('click', (e) => {

//     if (e.target.id == "start") {
//         if (gameStarted == false) {
//             startGame()
//             blink(computerchoice[0])
//         };
        
        
            
//     }

    
   

//     if (colorArr.includes(e.target.id)) {
//         userchoice.push(e.target.id)
//         console.log("userchose",userchoice);
//         if (computerchoice.length == userchoice.length) {


//             verifying()
//             console.log("computer choose",computerchoice);


//             userchoice = [];


//             for (let i = 0; i < computerchoice.length; i++) {
//                 setTimeout  (()=>{
//                     blink(computerchoice[i])
//                 }, 1200 * i)
//             };

//         };

        
//     };
    


    
// });


// function verifying() {
//     for (let i = 0; i <  computerchoice.length; i++) {
//         if(computerchoice[i] == userchoice[i]) {
//             console.log("1st if")
//             if ( i + 1 == userchoice.length) {
//                 console.log("2nd if")
//                 score++
//                 console.log(score)
//                 startBtn.innerText = score
//                 computerselect(randomNumber())
//             };
//         } else {
//             console.log("I'm in esle")
//             score > 0 ? (startBtn.innerText = --score) : (startBtn.innerText = score)
//             return;
//         };
//     };
// };


// function startGame(){
//     gameStarted = true;
//     computerselect(randomNumber());
//     startBtn.classList.remove('score');
//     startBtn.innerText = score;
// }

// function blink(color) {
//     setTimeout (()=>{
//         document.getElementById(color).classList.add('blink')
//     }, 500);
//     setTimeout (()=>{
//         document.getElementById(color).classList.remove('blink')
//     }, 1000);
// }




// function randomNumber() {
//     return Math.floor(Math.random()*4);
// };


// function computerselect(boxNum) {

//     switch(boxNum) {

//         case 0 : 
//             color = "red";
//             computerchoice.push(color);
            
//         break;

//         case 1 :
//             color = "yellow";
//             computerchoice.push(color);
            
//         break;

//         case 2 : 
//             color = "green";
//             computerchoice.push(color);
            
//         break;

//         case 3 :
//             color = "blue";
//             computerchoice.push(color);
//         break;

//     };

// };
