

    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
    updateScoreElement();
    let computerMove='';
    function getComputerMove(){
      let randomNum=Math.random();
      let computerMove='';
      if(randomNum>=0 && randomNum<1/3){
        computerMove='rock';
      }

      if(randomNum>=1/3 && randomNum<2/3){
        computerMove='paper';
      }

      if(randomNum>=2/3 && randomNum<1){
        computerMove='scissors';
      }
      return computerMove;
    }

let intervalId;  

document.querySelector(".auto-play").addEventListener('click',()=>{
  autoPlay();
});

let isPlaying=false;
function autoPlay(){
  let autoPlay=document.querySelector('.auto-play');
  if(!isPlaying){
    autoPlay.innerHTML='Stop Play';
    intervalId=setInterval(function(){
      let computerMove=getComputerMove();
      playGame(computerMove);
    },1000);
    isPlaying=true;
  }else{
    autoPlay.innerHTML='Auto Play';
    clearInterval(intervalId);
    isPlaying=false;
  }
}
 document.querySelector('.js-rock').addEventListener("click",()=>{
  playGame('rock');
 });

 document.querySelector('.js-paper').addEventListener("click",()=>{
  playGame('paper');
 });

 document.querySelector('.js-scissors').addEventListener("click",()=>{
  playGame('scissors');
 });

 document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  }else if(event.key==='p'){
    playGame('paper');
  }else if(event.key==='s'){
    playGame('scissors');
  }
 });
function playGame(playerMove){
  let result='';
  const computerMove =getComputerMove();
  
  if(playerMove==='rock'){
    if(computerMove==='rock'){
        result='you tied with the computer';
    }
    else if(computerMove==='paper'){
        result='you loss with the computer';
    }
    else{
        result='you won with the computer';
    }
  }
  if(playerMove==='paper'){
    if(computerMove==='rock'){
        result='you won with the computer';
    }
    else if(computerMove==='paper'){
        result='you tied with the computer';
    }

    else{
        result='you loss with the computer';
    }
  }
  if(playerMove==='scissors'){
    if(computerMove==='rock'){
        result='you loss with the computer';
    }
    else if(computerMove==='paper'){
        result='you won with the computer';
    }

    else{
        result='you tied with the computer';
    }
  }
  if(result==='you won with the computer'){
    score.wins+=1;
  } else if(result==='you loss with the computer'){
    score.losses+=1;
  }else if(result==='you tied with the computer'){
    score.ties+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.js-score-result').innerHTML=result;
  
  document.querySelector('.js-score-move').innerHTML=`You 
  <img class="move-icon" src="/image/${playerMove}-emoji.png" alt=""> 
  <img class="move-icon" src="/image/${computerMove}-emoji.png" alt=""> Computer`;

  updateScoreElement();
} 
function updateScoreElement(){
  document.querySelector('.js-score-button').
  innerHTML=`wins: ${score.wins}   losses: ${score.losses}    ties: ${score.ties}`;
}

function Restart(){
  localStorage.removeItem('score');
  document.querySelector('.js-score-button').
  innerHTML=`wins: ${score.wins=0}   losses: ${score.losses=0}    ties: ${score.ties=0}`;
}
document.querySelector(".restart").addEventListener('click',()=>{
    if(confirm('Are you sure want to reset the score?')){
      Restart();
    }
});
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Backspace'){
    if(confirm('Are you sure want to reset the score?')){
      Restart();
    }
  } 
}); 

