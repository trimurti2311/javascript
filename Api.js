//get data by hitting request on postman
//copy data and paste in new variable

let data=

{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
} 


  let cn=document.querySelector('#container')
  function renderHtml(users){
    users.forEach(function(el){
let html=
        `<div>
        <p> ${el.id}</p>
        <p>${el.email}</p>
        <p>${el.first_name}</p>
         <p>${el.last_name}</p>
        <p> ${el.avatar}</p>
        <img src="${el.avatar}">
        </div>`
        cn.insertAdjacentHTML("beforeEnd",html)
    })
  }
//renderHtml(data.data)

//    second way
  //by javascript
  
 // get data first
  let cn1=document.querySelector('#container')
  function renderHtml(users){
    users.forEach(function(el){
let html=
        `<div>
        <p> ${el.id}</p>
        <p>${el.email}</p>
        <p>${el.first_name}</p>
         <p>${el.last_name}</p>
        <p> ${el.avatar}</p>
        <img src="${el.avatar}">
        </div>`
    cn1.insertAdjacentHTML("beforeEnd",html)
    })
  }
  function getData(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
     response.json()
    .then(function(response){
        let data=response.data
        renderHtml(data)
    })
    })
  }
getData(2)
















































