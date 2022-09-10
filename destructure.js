// unpack or destructure of array

// let colors=["yellow","red","green","blue"] 
// let [a,b,c,d]=colors
// console.log(c)

// console.log("***********************************************************")

// //arrray inside array

// let numOne=[[11,22,33],[44,55,66]]
// let [[a1,b1,c1],[a2,b2,c2]]=numOne
// console.log(c2)
// console.log(a2)
// console.log(a1)
// console.log(b1)

// console.log("***********************************************************")

// //destructure of object
// let me={
//     name:"Archana",
//     hobby:"cooking"
// }
// let {name:m1,hobby:m2}=me
// console.log(m1)
// console.log(m2)
// console.log("***********************************************************")

// // object inside object

// let family={
//      me:{
//         name:"Archana",
//     hobby:["cooking","reading"]
// },
// husband:
// {
// nameM:"SachinHajare",
// hobby:["reading","writing"]
// },
// sons:
// {
// name1:"sohamHajare",
// name2:"shivanshhajare"

// }
// }
// let {me:{name:p1,hobby:[q1,q2]},husband:{nameM:p2,hobby:[q3,q4]},sons:{name1:p3,name2:p4}}=family
// console.log(q4)
// console.log(p4)
// console.log(p3)
// console.log(q2)
// console.log(q1)
// console.log(p1)
// console.log(p2)

// console.log("***********************************************************")

//object inside array

let school=[
   
   {
    student:"ram kale",
    rollNo:12,
    marks:[15,18,20]

    },
    {
        student:"akshay mule",
    rollNo:15,
    marks:[19,19,20]
    },
    {
        student:"spruha joshi",
        rollNo:17,
        marks:[17,20,20]
    
    }
]

let [{ student:r1,rollNo:s1,marks:[t1,t11,t111]},{student:r2,rollNo:s2,marks:[t2,t22,t222]},{student:r3,rollNo:s3,marks:[t3,t33,t333]}]=school
console.log(t333)
console.log(r3)
console.log(r1)
console.log(s3)
console.log(s1)
console.log(t11)


//array inside object

let aboutMe={
name:["Archana","sachin"],
lastname:["nimonkar","hajare"]
}
let {name:[f1,m1],lastname:[f2,m2]}=aboutMe
console.log(m1)
console.log(f1)
console.log(m2)
console.log(f2)
