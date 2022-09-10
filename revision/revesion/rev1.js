// prime number program
/*
                          
let userInput = prompt("Enter the number")

if (userInput == 1) {
    console.log(`${userInput} neither a prime number nor a composite number`)
}
else if (userInput < 1) {
    console.log(`${userInput} not a prime number`)
}
else {
    for (let i = 2; i < userInput; i++) {
        if (userInput % i == 0) {
            console.log(`${userInput} is not a prime number`)
            break;
        }
        else {
            console.log(`${userInput} is a prime number`)
        }
    }

}*/


                //mehod:2
  /*
   let prime = [17, 13, 1, 18, -3, 10, 20,43]
for (let j = 0; j < prime.length; j++) {
    if (prime[j] == 1) {
        console.log(`${prime[j]} neither a prime number nor a composite number`)
    }
    else if (prime[j] < 1) {
        console.log(`${prime[j]} not a prime number`)
    }
    else {
        for (let i = 2; i < prime[j]; i++) {
            if (prime[j] % i == 0) {
                console.log(`${prime[j]} is not a prime number`)
                break;
            }
            else {
                console.log(`${prime[j]} is a prime number`)
            }
        }

    }
}*/

let aa="Hello word"
console.log(aa)

                           //2)program statement
// add number  in given string 

let name="archana"
let arr=name.split('a')
//console.log(arr)                         // [ '', 'rch', 'n', '' ]
for(let i=0;i<arr.length;i++){
    if(arr[i]==''){
          arr[i]=10                     // add element at the end  arr.push(10)=[ '', 'rch', 'n', '', 10, 10 ]
    }
    
}
console.log(arr)

//output=[ 10, 'rch', 'n', 10 ]
//****************************************************************** //

//          program 3)   reverse string without using any method

let country="INDIA"

let rev=""
for( let i=country.length-1;i>=0;i--)
{
    rev=rev+country[i]
//  ""= ""  +A             "A"
//  "A"="A" +"I"           "AI"
}
console.log(rev)


let mall="Pheonix"
let rev1=""
for(let i=0;i<mall.length;i++){

    rev1=mall[i]+rev1
}
console.log(rev1)

console.log(/************************************************************************************/)












