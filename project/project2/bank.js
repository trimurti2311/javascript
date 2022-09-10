
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  //username:'js'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  //username:"ss"
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////


//step1:  get elements 

// let labelWelcome = document.querySelector('.welcome')
// //console.log(labelWelcome)
// let labelDate = document.querySelector('.date')
// //console.log(labelDate)
// let labelBalance = document.querySelector('.balance__value')
// //console.log(labelBalance)


// let labelSumin = document.querySelector('.summary__value--in')
// //console.log(labelSumin)
// let labelSumout = document.querySelector('.summary__value--out')
// //console.log(labelSumout)
// let labelSumInterest = document.querySelector('.summary__value--interest')
// //console.log(labelSumInterest)

// let labelTimer = document.querySelector('.timer')
// //console.log(labelTimer)

// let containerApp = document.querySelector('.app')
// //console.log(containerApp)
// let containerMovements = document.querySelector('.movements')
// //console.log(containerMovements)

// let btnLogin = document.querySelector('.login__btn')
// //console.log(btnLogin)
// let btnTransfer = document.querySelector('.form__btn--transfer')
// //console.log(btnTransfer)
// let btnLoan = document.querySelector('.form__btn--loan')
// //console.log(btnLoan)
// let btnClose = document.querySelector('.form__btn--close')
// //console.log(btnClose)
// let btnSort = document.querySelector('.btn--sort')
// //console.log(btnSort)

// let inputLoginUserName = document.querySelector('.login__input--user')
// //console.log(inputLoginUserName)
// let inputLoginPin = document.querySelector('.login__input--pin')
// //console.log(inputLoginPin)
// let inputTransferTo = document.querySelector('.form__input--to')
// //console.log(inputTransferTo)
// let inputTransferAmount = document.querySelector('.form__input--amount')
// //console.log(inputTransferAmount)
// let inputLoanAmount = document.querySelector('.form__input--loan-amount')
// //console.log(inputLoanAmount)
// let inputCloseUsername = document.querySelector('.form__input--user')
// //console.log(inputCloseUsername)
// let inputClosePin = document.querySelector('.form__input--pin')
// //console.log(inputClosePin)

let currentAccount = undefined

/// step:2)      create user name


let createUserName = function (accs) {
  accs.forEach(obj => {
    obj.username = obj.owner.split(" ").map(function (el) {
      return el[0]
    }).join('').toLowerCase()
  })
}
createUserName(accounts)
//console.log(accounts)

//step 3)   login event  apply addEventListener on btnLogin

btnLogin.addEventListener('click', function (event) {
  event.preventDefault()
  let userInputUserName = inputLoginUsername.value
  let userInputPin = inputLoginPin.value
  currentAccount = accounts.find(function (el) {
    return el.username == userInputUserName && el.pin == userInputPin
  })
  if (currentAccount) {
    containerApp.style.opacity = "100"
    inputLoginUsername.value = " "
    inputLoginPin.value = " "
    labelWelcome.textContent = `welcome${currentAccount.owner.split(' ')[0]} !`
    updateUI(currentAccount)
  }


})

//movements
//append html element

const updateMovements = function (ac) {
  containerMovements.innerHTML = ""
  ac.movements.forEach(function (mov, index) {
    let type = mov > 0 ? 'deposit' : 'withdrawal'          //ternary operator
    let html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${index + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`
    containerMovements.insertAdjacentHTML('beforeend', html)
  })
}


let updateSummary = function (ac) {
  //income
  let income = ac.movements.filter(function (el) {
    return el > 0
  }).reduce(function (acc, el) {
    return acc + el
  }, 0)
  console.log(income)
  labelSumIn.textContent = `${income}€`

  // withdrawal


  let withdrawal = ac.movements.filter(function (el) {
    return el < 0
  }).reduce(function (acc, el) {
    return acc + el
  }, 0)
  console.log(withdrawal)
  labelSumOut.textContent = `${withdrawal}€`


  // interest

  let interest = income * 0.10
  ac.interest = interest
  labelSumInterest.textContent = `${interest}€`
}


let updateBal = function (ac) {
  let sum = ac.movements.reduce(function (acc, el) {
    return acc + el
  }, 0)
  labelBalance.textContent = `${ac.interest + sum}€`
  ac.currentBalance = sum                                            //add currentBalance property in each object in accounts array
}


let updateUI = function (accounts) {
  updateMovements(accounts)
  updateSummary(accounts)
  updateBal(accounts)

}

//loan request
btnLoan.addEventListener('click', function (event) {
  event.preventDefault()
  let text = inputLoanAmount.value
  let mov = Number(text)
  currentAccount.movements.push(mov)
  updateUI(currentAccount)
  inputLoanAmount.value = ""
})

// addEventListner on transfer button

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault()
  let receiverUserInput = inputTransferTo.value                           //username
  let Amount = inputTransferAmount.value
  Number(Amount)

  //find receiver useraccount in accounts

  let actualReceiverUser = accounts.find(function (el) {
    return el.username == receiverUserInput
  })
  inputTransferTo.value = ""
  inputTransferAmount.value = ""
  if (actualReceiverUser && Amount > 0 && currentAccount.currentBalance > Amount &&
    receiverUserInput.username !== currentAccount.username) {
    currentAccount.movements.push(-Amount)
    actualReceiverUser.movements.push(Amount)
    updateUI(currentAccount)

  }


  // close account

btnClose.addEventListener('click',function(event){
  event.preventDefault()
  let closeUserName= inputCloseUsername.value
  let closeUserPin= inputClosePin.value
  inputCloseUsername.value=""
  inputClosePin.value=""

if(closeUserName==currentAccount.username  && closeUserPin==currentAccount.pin){

}


})




})


