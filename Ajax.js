



         //  Ajax stands for asynchronous javascript and xml
         //program executed by two ways synchronously and asynchronously

   //  synchronous execution  :sequentially execution
   //program 1)
   /*
   function sum(){
    let a=45
    let b=34
    console.log(a+b)                           
   }
   function double(){
    console.log("wel-come")             //every ststement of code gets executed one by one
                                        // statement has to wait for previous statement to get executed
   }
   double()
   sum()
  
   //output:   wel-come
   //           79

// program 2)

function display(){
 
    console.log("synchronous execution")       // synchronous execution
}
function word(){

console.log("asynchronous execution")          //  asynchronous execution

}
display()                                                              
word()

//asynchronous execution
    
function theme(){
    setTimeout(function(){
        console.log("hello")  
    },2000)
}
function decor(){
    console.log("red and black")
}
theme()
decor()*/

// output :red and black
//        hello   



//userCreate()
//getUserId()
//getUserInfo()
function getUserInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000);     
    setTimeout(()=>{
        console.log("get user by id")
    },2000)
    setTimeout(()=>{
        console.log("get user info")
    },1000)
}
getUserInfo()

                 //output:  get user info
                 //         get user by id
                //           user created

//in asynchronous : if previous statement required some time it does not wait 
//                  go to  next statement for execution

//  how to make asynchronous execution into synchronous execution
  ///solution:     call back hell


//   function hotel(){
//     setTimeout(function(){
//      console.log("come")
//      setTimeout(function(){
//         console.log("seat and order")
//         setTimeout(function(){
//             console.log("eat")
//         },1000)
//      },2000)
// },3000)
//   }
//   hotel()         //this triangular like structure called call back hell

  // output: come
  //         seat and order
  //         eat

  //call back hell is too complicated 
  //so in 2016  promises are indroduced in javascript
  
  //promises have three state pending,resolve and reject
   // promises are consumed        promisename.then
    //functions are called         functionname()
  

   //program 1)

  let obj=new Promise(function(resolve,reject){

    let a=10
    let b=10
    if(a==b){
        resolve("promises resolved")
     }
      else {
           reject("promises rejected")
        }
    }
  )
  obj.then(function(str){
    console.log(str)
  },function(str){
    console.log(str)
  })



  //program 2)

  let arr=new Promise(function(resolve,reject){
  let a="soham"
  let b="soham"

  if(a==b){
    resolve([2,5,8,10])
  }
 else {
    reject([-3,-6,-7,-1])
 }

  })
arr.then(function(a){
    console.log(a[0])
}).catch(function(a){
    console.log(a[2])
})


//program 3)

let arr1=new Promise(function(resolve,reject){
    let a="soham"
    let b="shiv"
  
    if(a==b){
      resolve([2,5,8,10])
    }
   else {
      reject([-3,-6,-7,-1])
   }
  
    })
  arr1.then(function(a){
      console.log(a[0])
  }).catch(function(a){
      console.log(a[2])
  }).finally(function(){
    console.log("i am always executable")
  })
  
  //program 4)

  let ticket=new Promise(function(resolve,reject){
      let num=1
 if(num>5){
  resolve(" 10 % discount on tickets")
 }
 else{
  reject("discount is not allowed in below 5")
 }
 
})
 ticket.then(function(num){
  console.log(" 10 % discount on tickets")
 },function(num){
  console.log("discount is not allowed in below 5")
 })

//program 5)

let addition=new Promise(function(resolve,reject){

      let number=[23,43,56,67]
       sum=[]
      let aaaa= number.reduce(function(acc,el){
         return acc+el
       },0)
        sum.push(aaaa)
     if(sum>150){
      resolve("correct")
     }
     else {
      reject("incorrect")
     }
})

addition.then(function(sum){
  console.log(sum)
  console.log("correct")
},function(sum){
  console.log("incorrect")
})



  














  














