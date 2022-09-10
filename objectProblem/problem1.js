let  departments=[
{
name:"E&Tc",
noofStaff:10,
class:["secondYear","thirdYear","fourthYear"],
about:{
    noOflab:7,
    MECompleted:8,
    HOD:"Dr.jagade sir" ,
    result:98
}

},
{  
    name:"Mechanical",
noofStaff:12,
class:["firstYear","secondYear","thirdYear","fourthYear"],
about:{
    noOflab:8,
    MECompleted:11,
    HOD:"Dr.doijade sir" ,
    result:96
}  

},
{
    name:"Civil",
noofStaff:14,
class:["secondYear","thirdYear","fourthYear"],
about:{
    noOflab:10,
    MECompleted:12,
    HOD:"Dr.Hangargekar sir" ,
    result:95
}
},

{

    name:"Computer",
    noofStaff:12,
    class:["thirdYear","fourthYear"],
    about:{
        noOflab:8,
        MECompleted:12,
        HOD:"Dr.Hajare sir" ,
        result:100
    }
}
]
/*
//console.log(departments)

//name of department and noofStaff

departments.forEach(function(el){
    console.log(el.name,el.noofStaff)

})
//---------------------------------------------------------//
//total noofStaff 
console.log(departments.reduce(function(acc,el){
    return(acc+el.noofStaff)

},0) )

//---------------------------------------------------------//
departments.forEach(function(el){
    //console.log(el.class.length)
    console.log(el.class[1])
})
//-----------------------------------------------------------//
 departments.filter(function(el){
     return (el.noofStaff==12)

 }).forEach(function(el){
     console.log(el.name)
 })
//-------------------------------------------------------------//
console.log(departments[3].about)

//--------------------------------------------------------------//


                                                                                                                                                                                                                                                                        
console.log (departments.reduce(function(acc,el){
return (acc+el.about.noOflab)
},0)/departments.length)

//-----------------------------------------------------------//

departments.filter(function(el){
    return (el.about.MECompleted>=11)  && (el.class.length>=3)
}).forEach(function(el){
    console.log(el.about.HOD)
})

//-------------------------------------------------------------------------------//
//maximum MECompleted staff with name
let max=0
let user;
departments.map(function(el){
if(el.about.MECompleted>max){
    max=el.about.MECompleted
    user=el.name
}
})
console.log(user)
//---------------------------------------------------//
//keys in about
departments.forEach(function(el){
    let count=0
    for(let key in el.about){
  count=count+1
}
console.log(el.name +" "+count )
})

//----------------------------------------------------//

let aa=departments.map(function(el){
    return (el.about.result)
}).sort()
console.log(aa)
 let maxa=aa[aa.length-1]
 console.log(departments.find(function(el){
 return (el.about.result==maxa)
 }))   */
//--------------------------------------------------------// 

let aa=departments.map(function(el){
    return (el.about.result)
}).sort(function(a,b){
    return b-a
})
console.log(aa)
 let maxa=(aa[0])                    
 console.log(departments.find(function(el){
 return (el.about.result==maxa)
 }))
//-----------------------------------------------//





    
