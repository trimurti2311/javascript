/*
//let lilist=document.querySelectorAll("li")
let input=document.querySelector("input")
//console.log(input)
//console.log(byclass)

let ullist=document.querySelector('ul')
let buttonOne=document.querySelector('button')

buttonOne.addEventListener('click',function(){
   let text1= input.value
     let newelement=document.createElement('li')
   newelement.textContent=text1
   
    ullist.appendChild('newelement')
    input.value=""

})*/


let ullist=document.querySelector('ul')
let buttonOne=document.querySelector('button')

let lilist=document.querySelectorAll('li')

 buttonOne.addEventListener('click',function(){
  for(let i=0;i<lilist.length;i++){
    if(i%2==0)
    {
        lilist[i].style.color="red"
  }
  else{
    lilist[i].style.color="green"
  }
 }})