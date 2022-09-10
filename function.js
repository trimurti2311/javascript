   //function declaration


 /*  function multiply(x,y){
    return x*y
    
   }
     let aa= multiply(19,10)
      console.log(aa)

                    //function expression
   let multiply1=function (a,b){
return a*b
   }
   let bb=multiply1(5,9)
   console.log(bb)


   //Arrow function
   let mul=(c,d)=>{
       return c*d
   }
   let gg=  mul(12,15)
   console.log(gg)


 
 
   let Name=function(name){
     // return name
      
       console.log( "hello" + name)
   }
   let ii=Name("archana")
  // console.log(ii)
   
   
   let ll="colors are beautiful"
   function  print(name){
       console.log(name)
   }
   print(ll)

   let Name=function(name){
    // return name
     
      console.log( "hello" + name)
  }
          Name("archana")
 // console.log(ii)
   
   
   
   
   
   
   
   let firstName=function (m,n){
    return m+n
}
let hh=firstName(10,20)
console.log(hh)*/
////////////////////////////////////////////

//Function as a parameter to another function

/*
let sum=function(a,b){
  return a+b
}
//let ii=sum(25,50)
//console.log(ii)

function addition(p){
   p=function(a,b){
  return a+b
}

let total=p(25,50)
 return total
} 
 let grandTotal=addition(sum)
 console.log(grandTotal)
*/

/*  
let bankName=function(name){
  //console.log(" your balance is in  "  + name)
  return  (" your balance is in  "  + name)
  }
//let check=bankName("sbi")
//console.log(bankName)
 //console.log(check)
function account(r){
  r=function(name){
  //console.log(" your balance is in  "  + name)
  return  (" your balance is in  "  + name)
  }
  let info= r("sbi")
   return info
}
let detail=account(bankName)
console.log(detail)   */


/////////////////////////////////////////
//Array as a parameter to function
/*
let children=["soham","aryan","advik","ishita","shivansh"]

let name=function(arr){
  return (arr  +  "  you make our life most beautiful")

for(let i=0;i<=children.length;i++){
  console.log(children[i])
 //return (arr  +  " you make our life most beautiful")

}
}
let gift=name(children)
console.log(gift)  */          


///////////////////////////////////////////////////////////////////
/*
let children=["soham","aryan","advik","ishita","shivansh"]

let name1=function(arr){
  //return (arr  +  "  you make our life most beautiful")

for(let i=0;i<=arr.length;i++){
  console.log(arr[i])                                                           
   return (arr[i]  +  " you make our life most beautiful")

}
}
let gift=name1(children)
console.log(gift)  */   
     //output:        soham
     //           soham you make our life most beautiful

//result store in other array
/*
let children=["soham","aryan","advik","ishita","shivansh"]
let arr2=[]
let name1=function(arr){
  //return (arr  +  "  you make our life most beautiful")

for(let i=0;i<children.length;i++){
  console.log(children[i])                                                           
   //return (arr[i]  +  " you make our life most beautiful")
arr2.push(arr[i]+"  you make our life most beautiful")
}
}
let gift=name1(children)
console.log(arr2)*/

/*
let children=["soham","aryan","advik","ishita","shivansh"]
 function joy(arr){
   let x=arr.map(function(el){
     return(`${el}   you make our life most beautilul `)
     
   })
  // console.log(x)
  return x
 }
let gift=joy(children)
console.log(gift)*/

////////////////////////////////////////////
//Boleean as a parameter to function
/*
let above18=true
function candidate(enter){
  if(enter){
    console.log("partitipation are allow in tournament")
  }
  else {

  console.log("partitipation are not allow in tournament")
    }
  }
candidate(above18)   *
/*
let above18=false
function candidate(enter){
  if(enter){
    console.log("partitipation are allow in tournament")
  }
  else {

  console.log("partitipation are not allow in tournament")
    }
  }
candidate(above18)   */
/////////////////////////////////////////////////////
//object as a parameter to function
//today's work
/*
let info={
name:"archana",
accountNo :10203449,
check:` balancehistory`,
print:`statement`
}
let account=function(info){
  return ('your account details'  + info)
 }
function passBook(view){
  view=function(info){
    return ('your account details '+ info)
   }
   let r=view(info.name)          
  //console.log(r)
  return r
}
 let show=passBook(account)
 console.log(show)*/
/*

 let novel={
      name:"yayati",
      author:"v.s.khandekar",
      noofPage:500,
  
  }
  function library(){
    
  for(let key in novel){
     console.log(key,novel[key])
 }

  }
    library()
/////////////////////////////////////////////////////



let passbook={
  name:"ArchanaNimonkar",
  accNo:102030,
  check:"balance"
}
function account(){
  console.log( "your account details are  " + passbook.name)
}
account(passbook.name)


let passbook1={
  name:"ArchanaNimonkar",
  accNo:102030,
  check:"balance"
}
function account1(){
  
  for(let key in passbook1){
    console.log( "your account shows "+(key,passbook1[key]))
  }
}
account1(passbook1)*/

//two function as a parameter to another function
/*
let add=function(a,b){
  return a+b;
}
let add1=function(c,d){
  return c+d;
}
function addition(fm,fn){
  // fm=function(a,b)
  // {
  //   return a+b;
  // }
  let sum1=fm(10,20) 
   let sum2=fn(30,40)
  return [sum1,sum2]
  
  // fn=function(c,d){
  //   return c+d;
  // } 
  
}
let sum=addition(add,add1)
// console.log(sum[0])
// console.log(sum[1])
console.log(sum[0]+sum[1])*/




let add=function(a,b){
  return a+b;
}
let add1=function(c,d){
  return c+d;
}

function addition(fm,fn){
  
  let sum1=fm(10,20) 
   let sum2=fn(30,40)

  return [sum1,sum2]
  
}
let arr=addition(add,add1)
// console.log(arr[0])
// console.log(arr[1])
console.log(arr[0]+arr[1])








