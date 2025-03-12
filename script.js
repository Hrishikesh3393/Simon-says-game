let gameGenerated = [];
let userGenerated = [];
let isStarted = false;
let box = ["red","blue","green","orange"]
let level = 0;
const btns = document.querySelectorAll('.btn')
const p = document.querySelector('p');

document.addEventListener("keypress",function(){
    if(isStarted===false){
        isStarted = true;
        console.log("game started");
        levelUp();
    }
})
function levelUp(){
    level++;
    userGenerated = []
    p.innerText = `level = ${level}`
    console.log(level);
    gameflashBox();
}
function gameflashBox(){
    const random = Math.floor(Math.random()*4);
    gameGenerated.push(box[random]);
    const currentElement = document.querySelector(`.${box[random]}`);
    currentElement.classList.add('gameFlash');
    setTimeout(function(){ 
        currentElement.classList.remove('gameFlash');
    },250);
}
for(btn of btns){
    btn.addEventListener('click',userflashBox);
}  
function userflashBox(){
    const currentElement = this;
    userGenerated.push(currentElement.id)
    currentElement.classList.add('userFlash')
    setTimeout(function(){ 
        currentElement.classList.remove('userFlash');
    },250);
    const ind = userGenerated.length-1;
    if(userGenerated[ind] !== gameGenerated[ind]){
        console.log("you lost");
        level = 0;
        isStarted = false;
        userGenerated = [];
        gameGenerated = [];
    }
    else{
        if(userGenerated.length === gameGenerated.length){
            setTimeout(levelUp,1);

        }
        
    }
}
