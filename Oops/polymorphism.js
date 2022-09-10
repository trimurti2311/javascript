//polymorphism
//poly:many        morph:forms
//it provides a way to perform single action in different forms

//It provides an ability to call the same method on different JavaScript objects.

//    example         search()    iphone on amazon
//  search()====> iphone
////  search()====> iphone 12pro
//  search()====> iphone 12pro black
//here method is one or action is one that is search()
//but we search element by three different forms


//there are two concept in polymorphism overloading and overridding
//overloading:  same class,same method,different signature(signature means parameters)
//              overloading is not possible in javascript but we can acheive it in different way
//


class calculus{
   
    calculator(a,b,c) {
        
        if(a!=undefined  &&  b!=undefined && c!=undefined){
        console.log(a+b+c)
    }
    else if(a!=undefined  &&  b!=undefined){
        console.log(a+b)
    }
    else{
        console.log('cannot add single digit')
    }
}

}
let add=new calculus()
add.calculator(3,6,7)
add.calculator(4,6)
add.calculator(3)


//overridding:different class,same method,same signature
// in overridding interitanceconcept are used

class worldBank{
save(){
    console.log("i am a world bank having save() method  7%")
}
loan(){
    console.log("i am a world bank having loan() method 6%")
}
}

class SBI extends worldBank{
    save(){
        console.log("i am a SBI bank having save() method  8%")
    }
    loan(){
        console.log("i am a SBI bank having loan() method 11.5%")
    } 
}

let worldB= new worldBank()
worldB.save()
worldB.loan()

let sbi= new SBI()
sbi.save()
sbi.loan()










