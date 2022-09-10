                       //   problem: "statement"

      //create buttons on ullist and also perform particular action according to button
                    //remove:remove the element
                   //up:shift  upward side 
                   //down:shift towards down side


 let ulList=document.querySelector('ul')
 let inputText=document.querySelector('input')
 let buttonA=document.querySelector('#on')
 let liList=document.querySelectorAll('li')

    for(i=0;i<liList.length;i++){
        create(liList[i])
    }

buttonA.addEventListener('click',function(){

let read=inputText.value
let newE=document.createElement('li')
newE.textContent=read
create(newE)
ulList.appendChild(newE)
inputText.value=""

})

function create(li){

let up=document.createElement('button')             //<button></button>
up.textContent="up"                                   //<button>up</button>   
up.className="up"                                  // <button class="up">up</button>
li.appendChild(up)

let down=document.createElement('button')             //<button></button>
down.textContent="down"                                   //<button>up</button>   
down.className="down"                                  // <button class="up">up</button>
li.appendChild(down)

let remove=document.createElement('button')             //<button></button>
remove.textContent="remove"                                   //<button>up</button>   
remove.className="remove"                                  // <button class="up">up</button>
li.appendChild(remove)

}

ulList.addEventListener('click',function(event){

if(event.target.tagName==="BUTTON"){

    if(event.target.className==="remove"){
      let li=event.target.parentElement
      let ul=li.parentElement
      ul.removeChild(li)

     }
     if(event.target.className==="up"){
        let li=event.target.parentElement
        let ul=li.parentElement
        let pre=li.previousElementSibling
        ul.insertBefore(li,pre)

     }
       if(event.target.className==="down"){
         let li=event.target.parentElement
         let ul=li.parentElement
         let next=li.nextElementSibling
         ul.insertBefore(next,li)
     }
}                                                     

})



























