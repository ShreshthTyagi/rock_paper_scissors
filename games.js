// Rules Button
var rulesbtn = document.querySelector(".rule");
var closebtn = document.querySelector(".rules_btn");
var tabrules = document.querySelector(".rules_tab");

rulesbtn.addEventListener('click', function() {
    tabrules.classList.toggle("display-rules");
});

closebtn.addEventListener('click', function() {
    tabrules.classList.toggle("display-rules");
});

//ScoreBox
let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

updateScoreBoard();

function saveScore() {
    localStorage.setItem('userScore', userScore.toString());
    localStorage.setItem('computerScore', computerScore.toString());
}

function updateScoreBoard() {
    document.querySelector('#userScore').textContent = userScore;
    document.querySelector('#computerScore').textContent = computerScore;
}

// Game

var CHOICES=[{name:'rock'},{name:'paper'},{name:'scissor'}];
var x=false;
var y=false;
var z=false;
const userchoice = document.querySelectorAll('.user_btn');
const uuchoice = document.querySelector('.uchoice');
const ppchoice = document.querySelector('.pchoice');
const wwinner = document.querySelector('#winner_winner');
const swwinner = document.querySelector('#swinner_winner');
const gamediv = document.querySelector('.game');
const resultdiv = document.querySelector('.results');
const replaybtn = document.querySelector('.replay');
const nextbtn = document.querySelector('.next')

userchoice.forEach(button=>{
    button.addEventListener('click', function(){
        const user_choice=button.dataset.choice;
        const choice= CHOICES.find(function(choice){
            return CHOICES.name= user_choice
        })
        console.log(CHOICES)
        const pc_choice= CHOICES[Math.floor(Math.random() * 3)];
        
        ppchoice.innerHTML=`
        <div class="user ${pc_choice.name}">
        <img src="./${pc_choice.name}.png"> 
        </div>`
        
        uuchoice.innerHTML=`
        <div class="user ${CHOICES.name}">
        <img src="./${CHOICES.name}.png"> 
        </div>`

        if (CHOICES.name === pc_choice.name) {
            wwinner.innerHTML = " TIE UP";
            replaybtn.innerHTML= "REPLAY"
            x=false;
            y=true;
            z=false;
            ppchoice.classList.toggle('circles')
            uuchoice.classList.toggle('circles')
          } else if (
            (CHOICES.name === 'rock' && pc_choice.name === 'scissor') ||
            (CHOICES.name === 'paper' && pc_choice.name === 'rock') ||
            (CHOICES.name === 'scissor' && pc_choice.name === 'paper')
          ) {
            wwinner.innerHTML = ' YOU WIN';
            swwinner.innerHTML = 'AGAINST PC';
            ppchoice.classList.toggle('circles')
            function chnge(){
            nextbtn.classList.toggle("hidden");
            };
            x=true;
            y=false;
            z=false;
            chnge()
            userScore++;
          } else {
            wwinner.innerHTML = ' YOU LOST';
            swwinner.innerHTML= 'AGAINST PC';
            uuchoice.classList.toggle('circles')
            computerScore++;
            x=false;
            y=false;
            z=true;
          }
          
          gamediv.classList.toggle("hide");
          resultdiv.classList.toggle("hide");

          saveScore();
          updateScoreBoard();
    })
})

//Replay Button
replaybtn.addEventListener('click', function() {
    gamediv.classList.toggle("hide");
    resultdiv.classList.toggle("hide");
    if(x==true){ 
        nextbtn.classList.toggle("hidden");
        ppchoice.classList.toggle('circles');
    }
    if(z==true){ 
       uuchoice.classList.toggle('circles');
    }
    if(y==true){
       uuchoice.classList.toggle('circles');
       ppchoice.classList.toggle('circles'); 
    }
    
})














