
////////////////////////////////////////////////////////////////////////
//property of string
/*
let name="sachin"
console.log(name.length)
    
    //------------------------------------------------//

    //methods of string

//1)toUpperCase()
let city="AhmedNagar"
let aa=city.toUpperCase()
console.log(aa)

//---------------------------------------//

//2)toLowerCase()
let city1="AhmedNagar"
let bb=city1.toLowerCase()
console.log(bb)

//---------------------------------------//

//3)includes()
let vehicle="bicycle"
let cc=vehicle.includes('c')
console.log(cc)

//----------------------------------------------//

let vehicle1="bicycle"
let dd=vehicle1.includes('p')
console.log(dd)*/

//--------------------------------------------------//

//4)string concatination

let fruit="mango"
let season="summer"
console.log("The king of fruit is "+fruit+" available in "+season)

//string litetral
let fruit1="banana"
let color="yellow"
console.log(`the fruit ${fruit1}  available in all season and ${color} in color`)

//---------------------------------------------------------------------//

//5)indexOf()
let ship="vikrant"
let aa=ship.indexOf('r')
console.log(aa)

//-------------------------------------------------------------//

//6)trim()

let missile="   Agni  "
console.log(missile.length)
let pp=missile.trim()
console.log(pp)
console.log(pp.length)

//--------------------------------------------------------------//

//7)trimStart()
let plane="  Raffel   "
console.log(plane.length)
let rr=plane.trimStart()
console.log(rr)
console.log(rr.length)

//---------------------------------------------------------------//

//8)trimEnd()
let plane1=" Raffel     "
console.log(plane1.length)
let rrr=plane1.trimEnd()
console.log(rrr)
console.log(rrr.length)

//-------------------------------------------------------------//

//9)slice()
// 0   1   2   3   4   5   6   7   8
// A   g   n   i   p   a   n   k   h
//-9  -8   -7 -6  -5  -4   -3  -2  -1
let book="Agnipankh"
console.log(book.slice(4))
console.log(book.slice(-2))
console.log(book.slice(2,6))
console.log(book.slice(-7,-2))
console.log(book.slice(4,-2))
console.log(book.slice(-9,3))
console.log(book.slice(-2,-6))
console.log(book.slice(6))

//replace()
let hobby="my hobby is playing"
let uu=hobby.replace('playing',"cooking")
console.log(uu)


//split()

// only this method gives output in array
    let book1="shrimanyogi"
    let zz=book1.split('i')
    console.log(book1)
    console.log(zz)
    

    let TV="onida"
    let yy=TV.split(TV[2])
    console.log(yy)

    let name1="kanchan"
    let xx=name1.split(name1[3])
    console.log(xx)