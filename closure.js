///variables

let a = 34                                                         //global variables can update any where 
{
    a = 50               //update value a from  34 to 50           //without defined by variable keyword variable considered
                                                                   // global variable
    console.log(a)    //50
}
console.log(a)       //50



let a1 = 34
a1 = 50           //update value a from  34 to 50                       //global variables can update any where 
{
    console.log(a)    //50
}
console.log(a)       //50


let b=90
{
    console.log(b)    //90
}
b=58
console.log(b)        //58

//*********************************************************************************************** *//

let p=37                                            //<= global variable
{
    let p=45                                        //<= local variable
       p=100
    console.log(p)     //100
}
console.log(p)  //37



//**************************************************************** */

var s=90
{
console.log(s)            //90
}
console.log(s)            //90


const r=86
{
console.log(r)            //86
}
//r=34                                         // we cannot assign to constant variable
 // console.log(r)                  // error: Uncaught TypeError TypeError: Assignment to constant variable
console.log(r)           //86

//******************************************* */

//  PROGRAM:1)
 let c="archana"
 var d="sachin"
 function name(){
    c="soham"
    console.log(c)          //soham
 }
console.log(c)          //archana
name()
console.log(d)          //sachin

console.log('*************************************************')

//  PROGRAM:2)
let c1="archana"
var d="sachin"
function name(){
  let c="soham"
  c="shivansh"                            
   console.log(c)                         //shivansh
   var d="amol"
   d="advik"
   console.log(d)                         //advik
}
console.log(c1)          //archana
name()
console.log(d)          //sachin
d="soham"
console.log(d)          //soham

console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")

// program 3) var is functioned scope
var g=20
function sub(){
    var g=56
    console.log(g)         //56
    g=67
    console.log(g)         //67
}
console.log(g)       //20
sub()
console.log(g )        //20


/*****  IMP        ********/
//differnce between let var and const variable keywords

//scope: let and const are blocked scope and var is functiond scope
//reassign: we can reassign to let and var but cannot to const
//let and var are quite similar

//LEXICAL SCOPE
// example 1)

function addition(){
    let x=49
    let y=65
    console.log (x+y)    //114

function addition1(){
    let x1=89
    let y1=76
    console.log (x+y)        //114
    console.log(x1+y1)         //165             //parent variables are accessible in child function but not
                                                 // but not in vice versa
    function addition2(){
        console.log(x+y+x1+y1)    //276
        let x2=80
        let y2=56
        console.log (x2+y2)       //136
    }
    addition2()
}
addition1()
}
addition()

//_________________________________________________________________________________//
// example 2)
function multiply(){
    let a=20
    let b=30
    console.log(a*b)

    function div(){
    
    console.log(a*b)
    let c=20
    let p=console.log((a*b)/c)
    
      }
         div()
    }
multiply()

//#################################################################################################//

/*              Encapsulation                */

// program 1)
function add(){
    let num=[10,20,30,40,50]
   return function(){ 
    let sum=num.reduce(function(acc,el){
        return (acc+el)
    },0)
 console.log(sum)                //  150      
}}
let total=add()
console.log(total)               //  function(){ 
                                 //  let sum=num.reduce(function(acc,el){
                                 //  return (acc+el)
                                 //  },0)

                                 //Function (anonymous)] ....shows in terminal
total()

  //program 2)

function greet(){
    let k="hello"
    let l="bye"
    return function(){
        let m={
            firstName:"archana",
            name:"sachin"
        }
        console.log(k+(m.name))            //hellosachin
        console.log(l + (m.firstName))     //byearchana
    }
}
let n=greet()
console.log(n)
n()

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
 //     closure


 function division(){
    let  u=36
    let v=6
    return function(){ 
    console.log(u/v)            //6
    }
 }
let t=division()                  //   t=function(){
console.log(t)                    //     console.log(u/v)     * this is closure*
t()                                //     }  

//closure is a function having access to parent scope even after closed the parent function.





