

//task
//api-----------users---------id---------getSingleInfo

//call back hell
// for users =https://reqres.in/api/users?page=${pageNumber}
//for id=`https://reqres.in/api/users

  function getUserInfo(pageNumber) {

    let request = new XMLHttpRequest()
    request.open('GET', `https://reqres.in/api/users?page=${pageNumber}`)
    request.send()
    request.addEventListener('load', function () {                  
        let obj = JSON.parse(this.responseText)
        console.log(obj)                                                             

        let id = obj['data'][0]['id']                    //got id here 

        //here we send another request for catching single user by passing pageNumber
        let request = new XMLHttpRequest()
        request.open('GET', `https://reqres.in/api/users/${id}`)
        request.send()
        request.addEventListener('load', function () {
            let obj = JSON.parse(this.responseText)
            console.log(obj.data)
        })
    })
}

getUserInfo(2)

        //output at line No.16
//Object
        //data: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
       //page: 2
        //per_page: 6
        //support: {url: 'https://reqres.in/#support-heading', text: 'To keep ReqRes free, contributions towards server costs are appreciated!'}
        //total: 12
        //total_pages: 2
       //[[Prototype]]: Object


       // output at line No.26
    //    {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://reqres.in/img/faces/7-image.jpg"
    // }

       
    
          // second way Promises

function getUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
}

function getUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
}
// //getUsers(2).then(function(response){
//     return response.json()
// }).then(function(response){
//     let id=response.data[2]['id']
//     return id
// }).then(function(id){
//     return getUserInfo(id)
// }).then(function(response){
//     return response.json()
// }).then(function(response){
//     console.log(response.data)
// })



// third way

//async() function await

let getSingleUserInfo= async function(){
    let res=await getUsers(2)
     let obj=await res.json()
     let id=obj['data'][0]['id']
     let resB=await getUserInfo(id)
    let objB=await resB.json()
    console.log(objB.data)
}
    getSingleUserInfo()
































































































































