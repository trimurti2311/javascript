
//map()     more program
/*
let numOne=[11,22,33,66,77,99,88]
let aaa=numOne.map(function(el,index,arr){
 if(el%2===0){
     return "even"
 }
 else{
     return "odd"
 }
})
console.log(aaa)

//---------------------------------------------//

let squareCube=[2,3,4,5,6,7,8,9,10]

let bbb=squareCube.map(function(el,index,arr){
 
       return el*el
       
})

let ccc=squareCube.map(function(el,index,arr){
   return el*el*el
  
})
console.log (bbb)
console.log(ccc)

//-----------------------------------------------------//
//14)concat()
//action:combine two any
//return:new array without any changes 
let a=[2,5,7,9]
let s=[6,8,3,1]
let a1=a.concat(s)
let s1=s.concat(a)
console.log(a1)
console.log(s1)
//------------------------------------------//
//15) reverse() 
//action:reverse the elements in the array
//return:new array with reversing elements

let a2=[2,5,7,9]
let s2=[6,8,3,1]
let a4=a2.reverse()
let s4=s2.reverse()
console.log(a4)
console.log(s4)

//----------------------------------------------------------------------//

//16)slice()

let vehicle=["bicycle"," car"," bus"," train","ship","plane"]
 
 
 console.log(vehicle.slice(2))
 console.log(vehicle.slice(-3))
 console.log(vehicle.slice(2,5))
 console.log(vehicle.slice(-2,-1))
 console.log(vehicle.slice(0,-3))
 console.log(vehicle.slice(-6,5))
 console.log(vehicle.slice(-3,-4))*/

 //----------------------------------------------//
 //17)splice()
//action:to delete elements from the given index
//return:deleting  elements 
 
 let vehicle1=["bicycle"," car"," bus"," train","ship","plane"]
 let ll=vehicle1.splice(2,4)
 console.log(ll)
//let mm=vehicle1.splice(1,3,"riksha","metro","boat")
 //console.log(mm)
 //console.log(vehicle1)