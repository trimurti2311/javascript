/*
let babyName="shivansh"
console.log(babyName.length)
console.log(babyName)
let boy=[]
for(i=0;i<babyName.length;i++){
    //console.log(i)
    console.log(babyName[i])
      boy.push(babyName[i])
}
console.log(boy)*/
  
// count number of vowel in string
//program 1

/*
let babyName1="shivansh"
//console.log(babyName.length)
console.log(babyName1)
let boy1=[]
let count=0
for(let i=0;i<babyName1.length;i++){
    //console.log(i)
    console.log(babyName1[i])
      boy1.push(babyName1[i])
  if(babyName1[i]=='a'||babyName1[i]=='e'||babyName1[i]=='i'||babyName1[i]=='o'||babyName1[i]=='u'){
      count=count+1
    }
}
console.log(boy1)
console.log(count )*/





//program 2   print string in reverse

/*let word="welcome"
let rev=""
for (let i=0;i<word.length;i++){
    rev=word[i]+rev
    console.log(rev)

}

//program3) ohter way to print string in reverse

let fruit="banana"
let rev1=""
for(i=fruit.length-1;i>=0;i--){
    rev1=rev1+fruit[i]
}
console.log(rev1)    


let son="soham"
let first=[]
for(let j=son.length-1;j>=0;j--){
    console.log(son[j])
    first.push(son[j])
}
console.log(first)*/


//count consonant in string
let flower="daisy"
let count=0
for(let i=0;i<flower.length;i++){
    //console.log(flower[i])
    if(flower[i]!='a'&&flower[i]!='e'&&flower[i]!='i'&&flower[i]!='o'&&flower[i]!='u')
{
    count=count+1
}
} console.log(count)

/*//count both vowel and consonant
let flower="daisy"
let count=0
let count1=0
for(let i=0;i<flower.length;i++){
   //console.log(flower[i])
   if(flower[i]=='a'||flower[i]=='e'||flower[i]=='i'||flower[i]=='o'||flower[i]=='u')
{
   count=count+1
}
else{
   count1=count1+1
}
}
console.log(count)
console.log(count1)


let city="ahmedngar"
let vowel=['a','e','i','o','u']
let count=0
for(let i=0;i<city.length;i++){
   if(vowel.includes(city[i])){
       count=count+1
   }
}
console.log(count)*/

//program on trim() space present at the middle
let name1="ra m"
let zz=""
let name=name1.trim()
for(let i=0;i<name1.length;i++){
   if(name1[i]!=" "){
       zz=zz+name1[i]
    // ""=""+r =======> "r"
    // "r"  +a =======>  "ra"
    //"ra"   +m ======>"ram" 
   }
}
console.log(zz)


let holyBook="Ram aya n  "
let ss=""
let book=holyBook.trim()
for(let m=0;m<holyBook.length;m++){


if(holyBook[m]!=" ")
{
ss=ss+holyBook[m]
}
}
console.log(ss)
console.log(holyBook.length)
console.log(ss.length)   




let aa='ssdadaagh 12 ssjw 34 eeee 25 '
let pp=aa.split(" ")
let num=[]
let qq=pp.filter(function(el){
    return Number(el)
    
})
for(let i=0;i<=qq.length;i++){
    if(isNaN(qq[i])==true){

    }
    else{
        num.push(Number(qq[i]))
    }
}

console.log(num)
let rr=num.reduce(function(acc,el){
    return acc+el
},0)
console.log(rr)














































