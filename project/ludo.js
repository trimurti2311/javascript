
let  player1=document.querySelector('#name--0')
let  player2=document.querySelector('#name--1')
console.log(player1)
console.log(player2)

let  scorep1=document.querySelector('#score--0')
let scorep2=document.querySelector('#score--1')
console.log(scorep1)
console.log(scorep2)

let  currentScorep1=document.querySelector('#current--0')
let  currentScorep2=document.querySelector('#current--1')
console.log(currentScorep1)
console.log(currentScorep2)

let  rollDice=document.querySelector('.btn.btn--roll')
let  newGame=document.querySelector('.btn.btn--new')
let  hold=document.querySelector('.btn.btn--hold')
console.log(rollDice)
console.log(newGame)
console.log(hold)

let dice=document.querySelector('.dice')
console.log(dice)


//step:1      reset the value at zero

let initial=function()
{
    scores=[0,0],
    currentScore=0,
    activePlayer=0,
    playing=true
//rollDice.style.display="none"
dice.style.display="none"
rollDice.style.display="block"
scorep1.textContent=0
scorep2.textContent=0
currentScorep1.textContent=0
currentScorep2.textContent=0
document.querySelector(`#score--0`).classList.add('player--winner')
document.querySelector(`#score--1`).classList.add('player--winner')
document.querySelector(`#score--0`).classList.remove('player--winner')
document.querySelector(`#score--1`).classList.remove('player--winner')

}
initial()

//step2: apply addListnerEvent on dice

function switchPlayer(){
    document.querySelector(`#current--${activePlayer}`).textContent =0
    currentScore=0
    activePlayer=activePlayer === 0 ?1:0         //ternary oprator
    player1.classList.toggle('player--active')   //switch the player by toggle
    player2.classList.toggle('player--active')
}

rollDice.addEventListener('click',function(){
   let  randomNumber=Math.floor(Math.random()*6)+1
   console.log(randomNumber)
   dice.style.display= "block"
  dice.src=`dice-${randomNumber}.png`            //source
  if(randomNumber != 1){
    currentScore = currentScore + randomNumber  
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
}
else{
    switchPlayer()
}
})



//click on hold button

hold.addEventListener('click',function(){

if(playing){

scores[activePlayer]=currentScore + scores[activePlayer]
document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
if(scores[activePlayer]>=25){
    playing=false
    document.querySelector(`#score--${activePlayer}`).classList.add('player--winner') 
    rollDice.style.display="none"
    dice.style.display="none"
}
else{
    switchPlayer()
}

}

})

document.querySelector('.btn.btn--new').addEventListener('click', initial)































































































