
//object literal
let info={
    name:"sachinHajare",
    age:37,
    city:"ahmednagar",
    education:"ME"
}
console.log (info)


//setting propertyy value for object outside the class
class person {
    name=undefined
    city=undefined
    education=undefined
}

console.log(person)
 let sachinhajare=new person()
sachinhajare.name="sohamHajare"
sachinhajare.city="nashik"
sachinhajare.education=2
delete sachinhajare.education
 console.log(sachinhajare)

 //example 2)
 class vehicle {
    name=undefined
    color=undefined

 }
 console.log(vehicle)

 let car= new vehicle()
 car.name="Audi"
 car.color="black"
 console.log(car)

 //setting the property value of object at the time of object creation

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
let shivH=new personC()
console.log(shivH)

shivH.setNa="shivanshhajare"
shivH.setCity="Ahmednagar"
shivH.setEducation="NaN"
console.log(shivH)