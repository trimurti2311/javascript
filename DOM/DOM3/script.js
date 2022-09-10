let ullist=document.querySelector('ul')
let buttonOne=document.querySelector('button')
let inputText=document.querySelector('input')

buttonOne.addEventListener('click',function(){

let text=inputText.value
let newE=document.createElement('li')
newE.textContent=text
ullist.appendChild(newE)
inputText.value=""

})







