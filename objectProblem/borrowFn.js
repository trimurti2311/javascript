 
                        //Borrow Function

let archana={
    firstName:"archana",
    lastname:"Nimonkar",
    rollNo:21,
    city:"ahmednagar",
    display:function(){
             console.log(this.firstName,this.city)
    }

}
//console.log(archana.display)

let archana1={
    firstName:"archana1",
    lastname:"Nimonkar1",
    rollNo:1217,
    city:"ahmednagar1",
    display:function(){
             console.log(this.firstName,this.city)
    }

}



//common  object's property and different values but method are same (i.e.here display method)
//so we take a borrow method to another object's
//e.g.   take borrow method to archana1 from archana 



let mahesh={
    firstName:"mahesh",
    lastname:"Nimonkar",
    rollNo:3,
    city:"pune",
    display:function(){
            //console.log(this.firstName,this.city)
            for(let key  in  this){
                console.log(key,this[key])
            }
    }

}

let deepika={
    firstName:"deepika",
    lastname:"Patil",
    rollNo:5,
    city:"Nashik",
  
    }

//let displayC=deepika.display                           //here  not get the scope to this keyword
//console.log(displayC)                                 //problem statement arrived

let displayB=mahesh.display
console.log(displayB)
 //statement:  Give the scope to this keyword by manually 
            //by using bind(),call(),apply()
 
//  method:1)      bind()
// return:  bind() return the function so we need to store in variable
//                  and then call it


let  show=displayB.bind(deepika)
show()       


// method:2) call()

displayB.call(mahesh)


//method:3) apply()


displayB.apply(deepika)




//    program:2)


let sanket={
    firstName:"sanket",
    lastname:"vidhate",
    marks:[89,90,98,94,88],
    display:function(){
       let aa= this.marks.reduce(function(acc,el){
            return (acc+el)

        },0)
console.log(aa)
    }
}
let sandesh={
    firstName:"sandesh",
    lastname:"vidhate",
    marks:[89,82,98,92,88]
}
let displayR=sanket.display
console.log(displayR)


// let total=displayR.bind(sandesh)
// total()


let sum=displayR.bind(sanket)
    sum()

    

//method:2) call()

displayR.call(sandesh)
displayR.call(sanket)

//method:3) apply()

displayR.apply(sandesh)



