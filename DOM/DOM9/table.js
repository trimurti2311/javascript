
// Add new row in table

let button = document.querySelector('button')
let table = document.querySelector('table')

let srInput = document.querySelector('#num')
let nameInput = document.querySelector('#name')
let signInput = document.querySelector('#si')
let markInput = document.querySelector('#mark')



button.addEventListener('click', () => {

    let inputSr = srInput.value
        srInput.value = ""
    let inputName = nameInput.value
        nameInput.value = ""
    let inputSign =signInput.value
        signInput.value = ""
    let inputMark =  markInput.value
        markInput.value = ""
    let template =
        `<tr>

   <td>${inputSr}</td>
   <td>${inputName}</td>
   <td>${inputSign}</td>
   <td>${inputMark}</td>

   </tr>`
    table.innerHTML += template

})




















