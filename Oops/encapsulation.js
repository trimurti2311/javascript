

//Encapsulation:
// encapsulation are used to make data privacy 

//the best way of encapsulation to make data privacy is closure
//also we can achieving data privacy using let and var keywords in the block 

// The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. 
//It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -

// Use let keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.
// The encapsulation allows us to handle an object using the following properties:

// Read/Write - Here, we use setter methods to write the data and getter methods read that data.

// Read Only - In this case, we use getter methods only.

// encapsulation is nothing but wrapping up properties and method in single unit .
//class is best example of encapsulation
// Encapsulation used to achive data privacy.
//best way to achive encapsulation in javascript is concept of closure



//   closure:
function countNumber(){
    let count=0
    return function(){
        count=count+1                //it hold the count value so that increase count after each call of function
        console.log(count)
    }
}
let aa=countNumber()
aa()                // output       count=1
aa()                //// output     count=2    
aa()               ////// output     count=3  
//console.log(count)       //can't access outside the blocks because let are blocked scope 
                           // so maintain the data privacy



          //program  2)
       class student{

      constructor() {
     let Marks=98                             //data privacy maintain by using let keyword in block      
     let age=22
     this.getMarks=function(){
        this.Marks=Marks
        console.log(Marks)
     }
     this.getage=function(){
        this.age=age
        console.log(age)
     }

      } 
       } 
       let archana=new student()
       archana.getMarks() 
       archana.getage()                  

//  program 3)
class studentA{

    constructor(fn,ln,age){
        this.firstName=fn
        this.lastName=ln
        this.age=age
    }
    getFirstName(){
        console.log(this.firstName)
    }
    getLastName(){
        console.log(this.lastName)
    }
    getAge(){
        console.log(this.age)
    }
}
let soham=new studentA("soham","hajare",7)
console.log(soham)
console.log(soham.firstName)
soham.getFirstName()
soham.getLastName()
soham.getAge()




class studentB{

    constructor(fn,ln,age){
        this._firstName=fn
        this._lastName=ln
        this._age=age
    }
    getFirstName(){
        console.log(this._firstName)
    }
    getLastName(){
        console.log(this._lastName)
    }
    getAge(){
        console.log(this._age)
    }
}
let soham1=new studentB("soham","hajare",7)
console.log(soham1)
console.log(soham1._firstName)
soham1.getFirstName()
soham1.getLastName()
soham1.getAge()




