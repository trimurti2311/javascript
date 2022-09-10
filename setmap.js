//stores the unique value
//does not store value by index
//to set object we can pass iterals

//main purpose of set is used to avoid duplicate values in array


//use set constructor to create new object

let setA= new Set()
console.log(setA)
 
//add() method

setA.add('Amol')
setA.add('Amal')
setA.add('palak')
setA.add('swara')
console.log(setA)

//size property
let p=setA.size
console.log(p)
console.log(typeof p)

//has()         case sensitive     //just like includes 
//returns boolean value                
let q=setA.has('Amal')
console.log(q)

// delete()
let qq=setA.delete('Amal')
console.log(qq)                  
console.log(setA)

let oo=setA.delete('Amol')


//clear()
let tt=setA.clear()
console.log(tt)                        // return undefined
console.log(setA)

let names=[22,33,44,55,66,77]
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

let info={
class:"first",
div:"raigad",
rollNo:20,
sub:["math","hindi","marathi","science"]
}
for(let property in info)
{
    console.log(property,info[property])                  //dot notation dooes not workm inside loop 
}


let veggi=new Set()
veggi=["tomato","potato","chilly","spinach","carrot"]
console.log(veggi)

for(let ele in veggi){
    console.log(ele,veggi[ele])
}

///forEach()
veggi.forEach(function(el){
    console.log(el)
})


/////     map      /////

//basic object stores only string as a key
//map store other data types also as a key

let student={
    name:"archanaNimonkar",
    rollNo:21,
    2:"division"
}
console.log(student)               //o/p { '2': 'division', name: 'archanaNimonkar', rollNo: 21 }
// here key 2 is number data type but in normal object it first convert number into string
//and then gives output


let student1={
    name:"archanaNimonkar",
    rollNo:21,
    2:"division",
    true:"isMarried"
}
console.log(student1)   //here we use boolean and number data type

//add property
student1.lastName="nimonkar"
console.log(student1)
//update property
student1.name="mahesh"
console.log(student1)

delete student1.rollNo

console.log(student1)









