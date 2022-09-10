/*let color=["red","blue","yellow","green","purple"]
color.push("pink")
console.log(color)
color.unshift("voilet")
console.log(color)
let aa=color.pop()
console.log(aa)
console.log(color)
let bb=color.shift()
console.log(bb)
let cc=color.includes("green")
console.log(cc)
let jj=color.forEach(function(el,index,array){

    console.log(`${el} color says`)
    
})*/


   /// filter  important 

/*     
    let color=["red","blue","yellow","green","purple"]
let joy=color.filter(function(el,index,array){
    return el.length>4
})
console.log(joy)       */



/*  let num=[11,22,33,44,55,66,77,88,99]
let pp = num.filter(function(el,index,array){
    return (el>60)
})
console.log(pp)  */



/*let num=[11,22,33,44,55,66,77,88,99]
let pp = num.filter(function(el,index,array){
    return (el>20 && el>60)
})
console.log(pp) 


let rr=[11,22,33,44,55,66,77,88,99]
let qq = rr.filter(function(el,index,array){
    return (el>20 && el<60)
})
console.log(qq) */

/*let nOne=[60,67,89,76,94]
let gg=nOne.reduce(function(acc,el,index,array){
    return acc + el
},5)
console.log(gg)   */


//leap year program  
/*let year=[1990,1993,1998,2003,2012,2007,2020]


for(let i=0;i<=year.length;i++){
    if(year[i]%400 ==0  ||   (year[i]%100 !=0 && year[i]%4 ==0)){
        console.log(year[i])
    }
    
}*/




/* let leapYear=[]
let year=[1990,1993,1998,2003,2012,2007,2020]
for(let i=0;i<=year.length;i++){
    if(year[i]%400 ==0  ||   (year[i]%100 !=0 && year[i]%4 ==0)){
        console.log(year[i])
    
    let aa=year[i]      
leapYear.push(aa) 

//console.log(leapYear)
}
console.log(leapYear)

}  */

/*     // sort() method of array 
let number=[2,5,7,6,11,17,31,22]
let odd=number.sort()
console.log(odd)

// solution of sort() method in array using function

//  sorting in asending order
let number1=[2,5,7,6,11,17,31,22]
let odd1=number1.sort(function(a,b){
    return a-b
})
console.log(odd1)


//  sorting in Desending order
let number2=[2,5,7,6,11,17,31,22]
let odd2=number2.sort(function(a,b){
    return b-a
})
console.log(odd2)                     */


let number3=[2,5,7,6,11,17,31,22]
let aa=number