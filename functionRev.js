/*
 //array and boolean parameter combination
let years=[1985,1988,2015,2021]
function cal(arr){
    for(let i=0;i<years.length;i++)
{
   let age= ( 2022-years[i])
    function drive(a){
         if(age>18){
            console.log("you can drive ")
        }
        
            else{
         console.log("you cannot drive ")
             }
        }
drive(age)
}    
}
cal(years)

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//
//number as a parameter and return type also number

function  sub1(x,y){
    return (x-y)
}
let yy=sub1(50,35)
console.log(yy)
console.log(yy+yy)



function  sub (x,y){
    console.log(x-y)
}
sub(45,21)
sub(67,54)
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//

//boolean as a parameter to function

let isadult=true
function allow(pass){
    if(pass){
        console.log ("allow as a participant")
    }
    else
    {

        console.log("not allow as a participant")
    }
}
allow(isadult)


let isadult1=false
function allow1(pass1){
    if(pass1){
        console.log ("allow as a participant")
    }
    else
    {

        console.log("not allow as a participant")
    }
}
allow1(isadult1)

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//

//Array as a parameter to function

let num1=[2,7,4,24,65,44,68]
function cube(arr){
    for(i=num1.length-1;i>=0;i--){
        console.log (num1[i]*num1[i]*num1[i])
    }
}
    cube(num1)          
    
    

    let num=[3,6,15,8,19,23,30]
    let kk=num.map(function(el){
        return el*el
       
    }) 
    console.log(kk)*/

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//

//object as aparameter to function

// let marks=[25,34,50,47,19,45,18]
// let student=[]
//     function result(arr){
//            let aa = marks.map(function(el){
//                      if(el>20){
//                         student.push(el)
//                         console.log("pass")
//                      }
//             else{
// console.log("exit")
//             }
// })
//     }
// result(marks)
// console.log(student)

//object as a parameter
 let info={
name  :'archanaNimonkar',
husband:'SachinHajare',
son:"SohamShiv",
 family:4
}

// console.log(info)
// console.log(info.name)
// console.log(info.son)
// console.log(info.husband)
// console.log(info.family)


// console.log(info.name)
// console.log(info['son'])
// console.log(info['husband'])
// console.log(info['family'])

// for(let key in info){
//     console.log(key,info[key])
// }

// function details(obj){
//     info.grandpa="mr.EknathHajare"
//     info.grandma="Mrs.jayaHajare"
//     info.family=6
//     info.city="Ahmednagar"
  
//     delete info.city
//     return obj;
// }
//    let aa=details(info)
//    console.log(aa)
   
   
//    //calculate square root
//    let squareroot = num=>{
// let i=1;
// let result=false
// while(!result) 
// {
//     if(i*i===num){
//         return i

//         break;
//     }
//      else{
//             console.log("number is not a perfect square-")
//      }
//     i++
// }     
// //return result 
//    }
//    let aa=squareroot(5)
//    console.log(aa) 

 


// function nums()























