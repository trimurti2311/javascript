let ulList=document.querySelector('ul')
let liList=document.querySelectorAll('li')
//console.log(liList)

ulList.addEventListener('mouseover',function(){
    for(let i=0;i<liList.length;i++){
        liList[i].textContent=liList[i].textContent.toUpperCase()
    }
})

ulList.addEventListener('mouseout',function(){
    for(i=0;i<liList.length;i++){
        liList[i].textContent=liList[i].textContent.toLowerCase()
    }
})



