let gameSeq =[];
let userSeq=[];
let started = false; // true if we press the key
let level =0; // initially game level is=0 it is not started
let h2 = document.querySelector("h2");
let buttons= ["red", "yellow", "green", "purple"];
document.addEventListener("keypress",function(){
if(started == false){
console.log("Game is started ");
started = true;
levelUp();
}
});
function gameFlash(btn) {           // This function do WHITE flash color
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);                        // 250 ms time to flash
}
function userflash(btn) {       // This function do BLACK flash color
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 259);        // 250 ms time to flash
}
function levelUp(){

    userSeq =[];// when level is up then userSeq is set to empty values so that user have to press again all the buttons.
level++;
h2.innerText = `Level ${level}`;
let randIdx = Math.floor(Math.random()*3);  // Generate random no.
let randColor = buttons[randIdx];   // Generate random color.
let randBtn = document.querySelector(`.${randColor}`);  // Generate random btn.
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);         // flash the random btn.
}
function checkAns(idx){ // This function is used to check the input user color and the Random color generated.
    // console.log("Current Level:",level);

    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
           // Here we add some delay when we move to one color to another color.
setTimeout(levelUp, 1000);
        }
        // console.log("Same value").

    }else{
        h2.innerHTML = `Game Over! <br> Your score was <b> ${level}</b> <br> Press any key to start a new game`; // In inner text we can't use HTML tags so wew are using innerHTML and <b> tag is for bold and <br> tag is for next line.
        // this is the case where the game is over and here whe have to do reset beacuse when the game is over then we have to press any key to restart the game again.

document.querySelector("body").style.backgroundColor="red";
setTimeout(function() {
    document.querySelector("body").style.backgroundColor="aqua";
},1000)// Red color is set for the only 1000 ms. then after that it change to white by the setTimeout function.

        reset(); // this the function we have made in last.
    }
}
function btnPress(){
let btn = this;             // the button is that is pressed then it is stored in the btn element (and "this" means btnPress).
userflash(btn);
userColor=btn.getAttribute("id");
//  console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];

}