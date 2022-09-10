 
 /*
 for(let i=0;i<=50;i=i+5)
 {
     console.log(i)
 }*/

/*
 for(let o=50;o>=5;o=o-5)
 {
     console.log(o)
 }


 console.log("----------------------------------")*/

/*for(let i=0;i<6;i++){
     console.log(i)
     if(i==4){
         break;
     }
 } */

 /*for(let i=0;i<6;i++){
    
    if(i==4){
        break;
    }
    console.log(i)
}*/


/*
for(let m=0;m<=10;m++){
    if(m==7){
        continue;
    }
    console.log(m)

}
console.log("--------------------------------------")

let n=0
while(n <= 40){
    console.log(n)
    n++
}*/


//let j=30
//while(j >= 1){
//    console.log(j*j)
   //}  

   
  /*let square=[]
   for(let i=1;i<=5;i++){
       if(i==4){
           break
       }
       console.log(i)
       let jj=i*i
       square.push(jj)
       console.log(square)
   }*/

///cube program
   //for(let i=1;i<=10;i++){
       
    //console.log(i*i*i)
 
    //    }
   
   
   
   /* let square=[]
   for(let i=1;i<=5;i++){
       if(i==4){
           break
       }
       console.log(i)
       let jj=i*i
       square.push(jj)
    }
    console.log(square)*/
     

   /*let square=[]
    for(let i=1;i<=5;i++){
        if(i==4){
            break
        }
        console.log(i)
        let jj=i*i
        square.push(jj)
     }
     console.log(square)
      let square1=square.map(function(el,index,array){
          console.log(el,index,array)
          return el+2
      })
      console.log(square1)*/


      /*let m=50
      while(m>=0){
          if(m==25)
          {
              m=m-5
              continue
          }
          console.log(m)
          m=m-5
      }*/


     let randomNumber=Math.floor(Math.random()*6)+1
      console.log(randomNumber)
 

      let userName=prompt('Enter the number')
      if(userName==randomNumber){
       console.log('your guess is correct')
      }
      else{
          console.log('your guess is incorrect')
      } 