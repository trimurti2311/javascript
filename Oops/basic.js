//we can create object by four ways
//1)object literal
//2)function constructor
//3)Es6
//4)object.create()
/*

//Object literal
let archana={
   firstName:"Archana",
   lastName:"Nimonkar",
   rollNo:21,
   city:"Ahmednagar"
}

let sachin={
    firstName:"Sachin",
    lastName:"Hajare",
    rollNo:12,
    city:"Nashik"
 }
 
 //the problem is it take lot  of time to create multiple object and required more number of lines
 // having same properties with different values

//solution by using template in function constructor we can create object by using single line

//method2)function constructor


let person=function(fn,ln,rn,cy){
this.firstName=fn,
this.lastName=ln,
this.rollNo=rn,
this.city=cy
this.display=function(){
   console.log(this.firstName,this.city)
}
 
}

let archana1=new person("archana1","nimonkar1",211,"nagar")
let archana2=new person("archana2","nimonkar2",211,"nagar")
let archana3=new person("archana3","nimonkar3",211,"nagar")
let archana4=new person("archana4","nimonkar4",211,"nagar")

let students=[archana1,archana2,archana3,archana4]
console.log(students)

//add new property in each element

students.forEach(function(el){
   el.division="raigad"
})
console.log(students)

students.forEach(function(el){
   el.display()
})*/

//prototype is a property of parent object 
//__proto__is a property of child object

let person2=function(fn,ln,rn){
   this.firstName=fn,
   this.lastName=ln,
   this.rollNo=rn,
   this.displayA=function(){
      console.log(this.firstName,this.lastName)
   }
    
   }
   
   let sanket=new person2("sanket","vidhate",10)
   let sandesh=new person2("sandesh","vidhate",12)
  //sanket.displayA()
   //sandesh.displayA()
  console.log(sanket.__proto__===person2.prototype)
  console.log(sandesh.__proto__===person2.prototype)
  
  console.log(sanket)
  console.log(sandesh)



//__proto__is a property of child object===prototype is a property of parent object 

/*
person2.prototype.displayA=function(){
   console.log(this.firstName,this.lastName)
}
person2.prototype.lang="marathi"
sanket.displayA()
sandesh.displayA()
console.log(sanket)
console.log(sanket)
console.log(sanket.lang)
console.log(sandesh.lang)

let names=["sachin","archana","soham"]
 console.log(names)
 names.length
 names.push("shivansh")
 console.log(names.__proto__===Array.prototype)*/

 //the problem is here ,when we add the methods or properties in template of parent object
 // that combine with new object created by using parent object 
 //so we can add the methods in parent prototype property

 //i.e parent.prototype===child.__proto__


 let person3=function(fn,ln,rn){
   this.firstName=fn,
   this.lastName=ln,
   this.rollNo=rn
 }
let soham=new person3("Soham","Hajare","16")
console.log(soham)

person3.prototype.display = function(){                        //we add display() and class in person3 prototype 
   console.log(this.firstName + this.lastName)                 //property and not in template of person3 
                                                               // thats why display() & class not combine with
                                                               // new object
}
person3.prototype.class="Raigad"

let shivansh=new person3("Shivansh","Hajare","1")
console.log(shivansh)

console.log(person3.prototype===soham.__proto__)   //output:true

console.log(soham instanceof person3)
console.log(shivansh.hasOwnProperty('firstName'))
console.log(shivansh.hasOwnProperty('class'))
console.log(soham.hasOwnProperty('lang'))

                                     //prototypal Inheritance
//The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. 
//It is a method by which an object can inherit the properties and methods of another object.
// Traditionally, in order to get and set the [[Prototype]] of an object, 
//we use Object.getPrototypeOf and Object.



// mehod:3)   Es6

////setting the property value of object at the time of object creation

class personB{
   constructor(na,ci,edu){
   this.name=na
   this.city=ci
   this.education=edu
}
}
console.log(personB)
let archanaN=new personB("archananimonkar","nagar","BE")
console.log(archanaN)
let sachinH=new personB("sachinhajare","nagar","ME")
console.log(sachinH)


//object creation using set method
class personC{
   
   setNa(na){
       this.name=na
}

setCity(na){
   this.city=ci
}
setEducation(edu){
   this.education=edu
}
}
//console.log(personC)
let shivH=new personC()
console.log(shivH)              //output:{}                     before updating values

shivH.setNa="shivanshhajare"
shivH.setCity="Ahmednagar"
shivH.setEducation="NaN"
console.log(shivH)           // after updating values
                            
                                //   output      at line 182
                             //   personC {
                              //setNa: 'shivanshhajare', 
                              //setCity: 'Ahmednagar', 
                              //setEducation: 'NaN'}
                              //setCity: "Ahmednagar"
                              //setEducation: "NaN"
                              //setNa: "shivanshhajare"
                              //[[Prototype]]: Object


//method 4)    object.create() 


// let mahesh=Object.create({})
// console.log(mahesh)

//    mahesh.firstName="Mahesh",
//    mahesh.lastName="Nimonkar",
//    mahesh.rollNo=16,
//     mahesh.city="pune"  
// console.log(mahesh)

let proto={
   display:function(){
      console.log(this.firstName,this.lastName)
   },
   init:function(fn,ln,rn,city){
      this.firstName=fn,
      this.lastName=ln,
      this.rollNo=rn,
      this.city=city
}
}
let mahesh1=Object.create(proto)
mahesh1.init("mahesh","Nimonkar",16,"pune")
mahesh1.display()








