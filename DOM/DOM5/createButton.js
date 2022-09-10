
//         program 1)
//statement:  To create buttons on newly added  li element
//three buttons up ,down,Remove
//step1:get elements

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let btn = document.querySelector('#sale')
// console.log(ulList)
// console.log(inputText)
// console.log(btn)

//step:2
//read the value from inputtext 
//create new li element   <li></li>
//add input text         <li>Mesho</li>
//appendChild element in ul list
btn.addEventListener('click', function () {
  let text = inputText.value
  let newEle = document.createElement('li')
  newEle.textContent = text
  createButtons(newEle)
  ulList.appendChild(newEle)
  inputText.value = ""

})

//step 3)create buttons

function createButtons(li){
let up=  document.createElement('button')
up.textContent="up"
up.className="up"
li.appendChild(up)

let down=document.createElement('button')
down.textContent="down"
down.className="down"
li.appendChild(down)

let remove=document.createElement('button')
remove.textContent="remove"
remove.className="remove"
li.appendChild(remove)

}

//--------------------------------------------------------------------------------------//


