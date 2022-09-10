let list=document.querySelector('ul')
let In=document.querySelector('input')
let buttonC=document.querySelector('#on')
let List=document.querySelectorAll('li')

 for(let i=0;i<List.length;i++){
     btnonLi(List[i])
}
buttonC.addEventListener('click',function(){
let text=In.value
let newE=document.createElement('li')
newE.textContent=text
btnonLi(newE)
list.appendChild(newE)
In.value=""

})
function btnonLi(li){
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




// list.addEventListener('click',function(event){

// if(event.target.tagName==="BUTTON"){

// if (event.target.className === "remove") {
//     let li = event.target.parentElement
//     let ulList = li.parentElement
//     ulList.removeChild(li)
// }}

// })























