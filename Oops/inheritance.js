 //Encapsulation   ---
// Inheritance  ---- 
// Polymorphism  ---- 
// Abstraction---- typescript

class vehicle{
    company="Hyundai"
    color="black"
    model="i20"
    millege=19
}

class hatchBack extends vehicle{
  newmodel="Grandi20"

}

class feature extends hatchBack{
   screen="25 inch touch screen"
   price="10 lakh"
}

let car =new feature()
console.log(car.company)
console.log(car.color)
console.log(car.model)
console.log(car.millege)
console.log(car.newmodel)
console.log(car.screen)
console.log(car.price)

//mehod:2)
//parent have constructor and child without constructor

class vehicle1{
    constructor(com,cl,model,mil){
    this.company=com
    this.color=cl
    this.model=model
    this.millege=mil
}
}

class hatchBack1 extends vehicle1{
    newmodel="swiftSport"
    price="9lakh"
}


let car1=new  hatchBack1("Maruti","carbongrey","swiftlxi", 21)
console.log(car1)

/*  Inheritance enables you to define a class that takes all the functionality 
    from a parent class and allows you to add more.
    Using class inheritance, a class can inherit all the methods and properties of another class. 
    Inheritance is a useful feature that allows code reusability. */

    console.log(car1.company)
    console.log(car1.color)
    console.log(car1.model)
    console.log(car1.millege)
    console.log(car1.newmodel)
    console.log(car1.price)

//Program 3)
// case 2: both parent and child have constructer

class vehicle2{
    constructor(com,cl,model,mil){
    this.company=com
    this.color=cl
    this.model=model
    this.millege=mil
}
}
class sedan extends vehicle2
{
    constructor(com,cl,model,mil,newmodel,price){
        super(com,cl,model,mil)
        this.newmodel=newmodel
        this.price=price
    }
}

let Audi=new sedan("Audi","Black","Q2",18,"A4","55lakh")
console.log(Audi.company)
    console.log(Audi.color)
    console.log(Audi.model)
    console.log(Audi.millege)
    console.log(Audi.newmodel)
    console.log(Audi.price)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//inheritance useful for reusability of code

    class Grandfather {
        constructor(fn,ln,ag){
         this.firstName=fn
         this.lastName=ln
         this.age=ag
        }
        show(){
    console.log(this.firstName+this.lastName+this.age)
        }
    }
    
    class father extends Grandfather {
        constructor(fn,ln,ag,pfn,age)
        {
        super(fn,ln,ag)                                   //super keyword used for to call parent constructor
        this.pfirstName=pfn
        this.page=age            
        }
        show(){
            console.log(this.pfirstName+this.lastName+this.page)
            super.show()
        }
    }
    // let  pappa=new father("shankar","Nimonkar",85,"balasaheb",59)
    //       console.log(pappa)
    //      console.log(pappa.firstName)  
    //      console.log(pappa.lastName)
    //      console.log(pappa.pfirstName)
    //      console.log(pappa.page)
    //      console.log(pappa.age)
    // pappa.show()
    
    class son extends father{
        constructor(fn,ln,ag,pfn,age,sfn,sage){
            super(fn,ln,ag,pfn,age)
            this.sfirstName=sfn
            this.sage=sage
        }
        show(){
            console.log(this.sfirstName+this.lastName+this.sage)
            super.show()
        }
    }
    let mahesh=new son("shankar","nimonkar",85,"Balasaheb",59,"mahesh",29)
    mahesh.show()
    let amol=new son("shankar","nimonkar",85,"Balasaheb",59,"amol",34)
    amol.show()
    
   
    //program  2)
    // parent object have to child
    
    class parent{
        constructor(ffn,mfn,ln){
    
            this.ffirstName=ffn
            this.mfirstName=mfn
            this.lastName=ln
        }
       info(){
        console.log(this.ffirstName+this.lastName)
        console.log(this.mfirstName+this.lastName)
       }
    
    }
    class child extends parent{
        constructor(ffn,mfn,ln,fn){
            super(ffn,mfn,ln)
            this.firstName=fn  
        }
        info(){
            console.log(this.firstName+this.lastName)
            super.info()
           }
    
    }
    
    let mahesh1= new  child("Balasaheb","Kanchan","Nimonkar","mahesh")
      mahesh1.info()
    let archana=new  child("Balasaheb","Kanchan","Nimonkar","archana")
      archana.info()
    

















//class Student {
    //     firstName = "chinmay"
    //     lastName = "deshpande"
    //     rollNo =23
    //     age = 44
    // }
    
    // class Teacher extends Student {
    //     salary = 1000
    // }
    
    // class Professor extends Teacher {
    //     specialization = "English"
    // }
    
    // let amola = new Professor()
    // console.log(amola.firstName)
    // console.log(amola.age)
    // console.log(amola.rollNo)
    // console.log(amola.salary)
    // console.log(amola.salary)
    
    
    
    // program2
    // //Parent constructor , no constructor in child
    
    // class Student {
    //     constructor(firstName,lastName,address,adharNo){
    //         this.firstName = firstName
    //         this.lastName = lastName,
    //         this.address = address
    //         this.adharNo = adharNo
    //     }
    
    // }
    
    // class Teacher extends Student {
    //     salary = 1000
    // }
    
    // let amol = new Teacher("amol","rao","nandanvan",123)
    
    // console.log(amol.firstName)
    // console.log(amol.lastName)
    // console.log(amol.address)
    // console.log(amol.adharNo)
    // console.log(amol.salary)
    
    
    
    
    // program 3
    // case 2 parent constructor child constructor
    
    // class  Student {
    
    //     constructor(firstName, lastName , age , roll){
    //         this.firstName = firstName
    //         this.lastName = lastName
    //         this.age = age 
    //         this.roll = roll
    //     }
    
    // }
    
    // class Teacher extends Student {
    //     constructor(firstName, lastName , age , roll,salary){
    //         super(firstName, lastName , age , roll)
    //         this.salary = salary
    //     }
    
    // }
    
    // let amol = new Teacher("am","ro",12,23,1000)
    // console.log(amol.salary)
    // console.log(amol.firstName)
    // console.log(amol.lastName)
    // console.log(amol.age)
    // console.log(amol.roll)
















