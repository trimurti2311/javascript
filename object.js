// let info={
//     name:"Archana",
//     lastname:"Nimonkar",
//     rollNo:21,
//     class:2

// }
//console.log(info)

//Retrive values using dot notation
// console.log(info.name)
// console.log(info.lastname)
// console.log(info.rollNo)
// console.log(info.class)

//Retrive values using bracket notation
// console.log(info['name'])
// console.log(info['lastname'])
// console.log(info['rollNo'])
// console.log(info['class'])



// update values using dot notation
// let markSheet={
//     english:90,
//     math:85,
//     marathi:87,
//     science:95,
//     grade:"A++"

// }

// markSheet.english=95
// markSheet.marathi=91
// console.log(markSheet)
// console.log(markSheet.english)
// console.log(markSheet.marathi)


// update using bracket notation

// markSheet['science']=94
// markSheet['math']=93
// console.log(markSheet)
// console.log(markSheet['science'])
//  console.log(markSheet['math'])


//Add using dot notation and bracket notation
// let markSheet={
//     english:90,
//     math:85,
//     marathi:87,
//     science:95,
//     grade:"A++"

// }

// markSheet.hindi=89
// markSheet.history=90
// console.log(markSheet)


// let markSheet={
//     english:90,
//     math:85,
//     marathi:87,
//     science:95,
//     grade:"A++"

// }

// markSheet['hindi']=89
// markSheet['history']=90
// console.log(markSheet)


// //Delete using dot and bracket notation
// let novel={
//     name:"yayati",
//     author:"v.s.khandekar",
//     noofPage:500,

// }
// delete novel.noofPage
// delete novel['name']
// console.log(novel)
//--------------------------------------------------------//



//for loop in object
// dot notation does not work in loop


// let novel={
//     name:"yayati",
//     author:"v.s.khandekar",
//     noofPage:500,

// }
// for(let key in novel){
//     console.log(key,novel[key])


// }
//----------------------------------------------------------//
// let staff=[
//     {  
//         name1:"prof.Hajare",
//         subject: "consumerelectronic"
//     },
// {
//     name1:"prof.kale",
//     subject: "powerlectronic"
// },

// {
//     name1:"prof.shaikh",
//     subject: "embeddedSystem"
// }
// ]
// //                                            
// for(let i=0;i<staff.length;i++){
//     console.log(staff[i])
   
// }
// let bb=staff.push({
//     name1:"prof.mane",
//     subject:"microcontroller"
// })
// console.log(bb)
// console.log(staff)

//-----------------------------------------------//
let staff=[
    {  
        name1:"prof.Hajare",
        subject: "consumerelectronic"
    },
{
    name1:"prof.kale",
    subject: "powerlectronic"
},

{
    name1:"prof.shaikh",
    subject: "embeddedSystem"
}
]

console.log(staff[0]   ['name1'] )      
console.log(staff[2]. name1 )      
console.log(staff[1]   ['subject'] )      
console.log(staff[0] .subject )                     
staff[2].name1="prof.deshmukh"
console.log(staff[2])
staff[1]['subject']="VLSI"
console.log(staff)



