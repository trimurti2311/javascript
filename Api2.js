// getUserByPage
//https://reqres.in/api/users?page=2
//take out id by hitting single user get request in reqres site on postman
//https://reqres.in/api/users/2

let cn=document.querySelector('#container')
  function renderHtml(obj){
    
let html=
        `<div>
        <p> ${obj.id}</p>
        <p>${obj.email}</p>
        <p>${obj.first_name}</p>
         <p>${obj.last_name}</p>
        <p> ${obj.avatar}</p>
        <img src="${obj.avatar}">

        </div>`
     cn.insertAdjacentHTML('beforeEnd',html)
    }
  
function getUserInfo(pageNumber){

let request =new XMLHttpRequest()
request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
request.send()
request.addEventListener('load',function()
{
 let obj=this.responseText                     //jsonstring
 obj=JSON.parse(obj)
 let id=obj.data[0].id

 let request =new XMLHttpRequest()
 request.open('GET',`https://reqres.in/api/users/${id}`)
 request.send()
 request.addEventListener('load',function(){
  let obj=this.responseText                     //jsonstring
  obj=JSON.parse(obj)
  user=obj.data
  renderHtml(user)
})

})
}
//getUserInfo(2)


// 2)promises 

function getUser(pageNumber){
    return  fetch(`https://reqres.in/api/users?page=${pageNumber}`)
}

function getUserId(id){
    return  fetch(`https://reqres.in/api/users/${id}`)
}
getUser(2)
.then(function(response){
    return response.json()
}).then(function(obj){
    id = obj.data[0].id
    return id
}).then(function(id){
    return  getUserId(id)
}).then(function(response){
    return response.json()
}).then(function(obj){
    //console.log(obj.data)
    renderHtml(obj.data)
})





