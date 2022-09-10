
                 ///To check value is number or not

//    operation perform on number object


console.log(3 == 3.0)                                          //true
console.log('3')                                               //3 
console.log(typeof ('3'))                                      //string
console.log(typeof (3))                                        //number
console.log(Number('3'))                                       //3
console.log(+('3'))                                            //3


let a = Number.parseInt("20px")                           //string start with number then shows number value    o/p  20
let b = Number.parseInt("aa25px")                        //string start with char. then shows                  o/p   NAN
let b1 = Number.parseInt(+"aa25px")                      //NaN
let c = Number.parseFloat("34.87px")                    //string start with number then shows number value    o/p  34.87
let d = Number.parseFloat("rr34.87px")                  //string start with char. then shows                  o/p   NAN

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""//


let y=Number.isNaN('20')                                      
let y1=Number.isNaN(20)
console.log(y)                                                 // false
console.log(y1)                                                // false


let a1=Number.isNaN('+20')
let  a2=Number.isNaN(+'20')
let  a3=Number.isNaN(10/0)
console.log(a1)                                               //false 
console.log(a2)                                               //false
console.log(10/0)                                             //Infinity


//  check is integer or not

console.log(Number.isInteger(56.87))                        //false
console.log(Number.isInteger(5))                            //true
console.log(Number.isInteger('5'))                          //false  
console.log(Number.isInteger(+'5'))                         //tru



console.log(Number.MIN_SAFE_INTEGER)                //-9007199254740991                can store min integer value
console.log(Number.MAX_SAFE_INTEGER)                //9007199254740991                 can store max integer value


//  operation perform on Math object

console.log(Math.sqrt(36))
console.log(7*7)
console.log(Math.cbrt(27))
console.log(3*3*3)

/// find max  or min number

let max=Math.max(34,56,76,44,334,678,676)
  console.log(max)

let min=Math.min(34,56,76,44,334,678,676)
  console.log(min)

  //  pi value
let PI=Math.PI
console.log(PI)           //pi=3.14

console.log(Math.trunc(34.56))              //trunc return only integer value  o/p  34
console.log(Math.ceil(34.56))               //35
console.log(Math.floor(34.56))              //34

console.log(Math.trunc(-34.56))             //-34
console.log(Math.ceil(-34.56))              //-34
console.log(Math.floor(-34.56))             //-35

console.log(Math.round(34.56))              //35


console.log(Math.round(34.4))                //34
console.log(Math.round(34.5))                //35
console.log(Math.round(34.7))                //35


// fix the digit value after decimal point

let num=436.876543
console.log(num.toFixed(2))                //o/p  436.88

console.log(23.5644.toFixed(2))            //    23.56
console.log(23.5674.toFixed(2))            //    23.57





