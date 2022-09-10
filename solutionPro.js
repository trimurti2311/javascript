//problem:   call back hell is bulky and complicated

function hotel() {
    setTimeout(function () {
        console.log("come")
        setTimeout(function () {
            console.log("seat and order")
            setTimeout(function () {
                console.log("eat")
            }, 1000)
        }, 2000)
    }, 3000)
}
 //hotel()       

//   solution:   promises

// let hotelA = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if ('comeInHotel') {
//             resolve('wel-come')
//         }
//         else {
//             reject('bye')
//         }
//     }, 3000)
// })
// function waiter() {
//     return new Promise(function (resolve, reject) {

//         setTimeout(function () {
//             if ('seat') {
//                 resolve('order')
//             }
//             else {
//                 reject('bye')
//             }
//         }, 2000)
//     })
// }
// function waiter1() {
//     return new Promise(function (resolve, reject) {

//         setTimeout(function () {
//             if ('placeOrder') {
//                 resolve('eat')
//             }
//             else {
//                 reject('bye')
//             }
//         }, 1000)
//     })
// }
// //consume promise
// hotelA.then(function (str) {
//     console.log(str)
//     return waiter()
// })
//     .then(function (str) {
//         console.log(str)
//         return waiter1()
//     })
//     .then(function(str){
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log('i will always open')
//     })


//better solution than promises comes in 2017

//async function:


function fiveStar(){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('comeInHotel') {
                resolve('wel-come')
            }
            else {
                reject('bye')
            }
        }, 3000)
    })
}
    function waiterB() {
        return new Promise(function (resolve, reject) {
    
            setTimeout(function () {
                if ('seat') {
                    resolve('order')
                }
                else {
                    reject('bye')
                }
            }, 2000)
        })
    }
    function waiterC() {
        return new Promise(function (resolve, reject) {
    
            setTimeout(function () {
                if ('placeOrder') {
                    resolve('eat')
                }
                else {
                    reject('bye')
                }
            }, 1000)
        })
    }


let order=async function(){
    let p=await fiveStar()
    console.log(p)
    let q=await waiterB()
    console.log(q)
    let r=await waiterC()
    console.log(r)

}
order()





