
/*
//array store the values in index
//array also one object so it have properties and methods
//property of array:length
//methods of array
//Push(),unshift(),pop(),shift(),includes(),map(),filter(),
//some(),every(),find(),findIndex(),foreach(),reduce()
//sort(),fill(),concat(),join(),flat()

//property:length

let number=[11,24,36,56,78,89]
let aa=number.length
console.log(aa)
//output:number of elements:6

//methods of array
//method have action and return
//1)   push()
//action:add the element at last
//return:new length of array

let car=["audi","mercediz","aura","swift","wagnar"]
let bb=car.push("beat")
console.log(bb)
console.log(car)
//--------------------------------------------------------------------//

//2)   unshift()
//action:add the element at first
//return:new length of array

let car1=["audi","mercediz","aura","swift","wagnar"]
let cc=car1.unshift("figo")
console.log(cc)
console.log(car1)
//--------------------------------------------------------------------//

//3)    pop()
//action:remove the element at last
// return:name of removed element

let company=["Tata","Mahindra","Maruti","Hyundai","Chevrolet","Renault"]
let dd=company.pop()
console.log(dd)
console.log(company)
//-------------------------------------------------------------------------//

//4)    shift()
//action:remove the element at first
// return:name of removed element

let company1=["Tata","Mahindra","Maruti","Hyundai","Chevrolet","Renault"]
let ee=company1.shift()
console.log(ee)
console.log(company1)
//-------------------------------------------------------------------------------------//

//5)  includes()
//action: search the element
//return: True value if element occured
let company2=["Tata","Mahindra","Maruti","Hyundai","Chevrolet","Renault"]
let ff=company2.includes("Maruti")
console.log(ff)
console.log(company2)
//------------------------------------------------------------------------------------------//

//6) map()
//action: callback function with each element of array
//return:new array with result

let color=["red","orange","pink","yellow","green","blue","purple"]
let gg=color.map(function(el,index,arr){
  //console.log(el,index,arr)
return(`${el} color shows`)

})
console.log(gg)

//7) filter()
//action:search the elements according to condition
//return:new array with filtered elements
let colors=["red","orange","pink","yellow","green","blue","purple"]
let hh=colors.filter(function(el,index,arr){
return (el.length>4)
})
console.log(hh)*/
/*
//8)some()
//action:determine specific callback function return is true for any element in array
//return: if condition satisfy by single element it gives  output true 
let color1=["red","orange","pink","yellow","green","blue","purple"]
let ii=color1.some(function(el,index,arr){
    return (el.length==4)

})
console.log(ii)

//9)every()
//action:determine specific callback function return is true for all elements in array
//return: if condition satisfy by single element it gives  output true 


let color2=["red","orange","pink","yellow","green","blue","purple"]
let jj=color2.every(function(el,index,arr){
    return (el.length>=3)

})
console.log(jj)


//10)find()
//action:
//return: first occurence element return
let number=[11,44,75,77,99,20]
let kk=number.find(function(el,index,arr){
    return(el>70)

})
console.log(kk)



//11)findIndex()
//action:
//return:  index of first occurence element return
let number1=[11,44,75,77,99,20]
let ll=number.findIndex(function(el,index,arr){
    return(el>70)

})
console.log(ll)

//12)reduce()
//action:
//return:  return single value in new array
let number2=[11,44,75,77,99,20]
let mm=number2.reduce(function(acc,el,index,arr){
    return acc+el

},10)
console.log(mm)

//13)sort()
//action:
//return:
let color3=["red","orange","pink","yellow","green","blue","purple"]

let nn=color3.sort()
console.log(nn)

let number3=[11,201,44,75,100,77,99,20]
let oo=number3.sort((a,b)=>a-b)
console.log(oo)


//14)fill()
//action:
//return:
let cube=[1,8,27,64,125]
let pp=cube.fill(100,2)
console.log(pp)

let salary=[20000,5000,4000,4002,5004,6000]
let tt=salary.fill(true,2,5)
console.log(tt)

//15)join()
//action:combine elements in array
//return:single string
let me=["archana","nimonkar","hajare","32"]
let qq=me.join('-')
console.log(qq)


//16)concat()
//action:combine two or more arrary
//return:a new array without modifying any exsiting array
let nature=["mountain","river","forest","ocean"]
let places=["Himalay","ganga","tadoba","hinad mahasagar"]
let rr=nature.concat(places)
console.log(rr)

//17)flat()
//action:
//return:

let num=[3,7,3,[9,11,7]]
console.log(num.flat())
let  num1=[[1,3,5],[7,8,9],[11,13,15]]
console.log(num1.flat())*/



//18)forEach()

let ballon=["red","yellow","green"]
ballon.forEach(function(el){
    console.log( el +" color  ballon make children happy")
})


