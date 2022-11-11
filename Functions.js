// let age = 4
// switch (true){
//     case (age < 18): console.log(`That'll be £8 for a child's ticket`); break
//     case (age >= 69): console.log (`That'll be £7.50 for a senior ticket`); break
//     default: console.log(`That'll be 10.95 for an adult ticket`)
// }

// const favColour = (favColour) => {
//     console.log(`My favourite colour is ${favColour}`)
// }

// favColour(`red`)


// const factorial = (n) => {
//     if ((n===0) || (n===1)){
//         return 1;
//     } else {
//         return (n*factorial(n-1));
//     }
// }

// console.log(factorial(23))



// let orderCount = 0
// function takeOrder(topping, price){
//     console.log(`Pizza with ${topping} costs ${price}`);
//     orderCount++; console.log(`Order number ${orderCount}`)
// }

// takeOrder(`pepperoni`, 14.99)
// takeOrder('olives', 10.99)

// let balance = 1000
// let pinNumber = 3675
// function withdrawAttempt(pinAttempt, withdrawAmount) {
//     if (pinAttempt===pinNumber && balance >= withdrawAmount) {balance -= withdrawAmount;
//         console.log(`You have withdrawn ${withdrawAmount} and have ${balance} remaining.`)
//     }
//     else if (pinAttempt != pinNumber) console.log(`Wrong PIN`);
//     else if (balance < withdrawAmount) console.log(
//         `Insufficient funds. You attempted to withdraw ${withdrawAmount} and have only ${balance} remaining.`
//         );
//     else console.log(`Something went wrong`)
// }

// withdrawAttempt(3675, 550)
// withdrawAttempt(3675, 1200)
// withdrawAttempt(1245, 100)