
// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// };
// const person = {
//     name: "Kyle",
//     age: 33
// };

// const Alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }
// let day = "Sunday";
// let alarm

// if (day=="Saturday" || day=="Sunday") {
//     alarm=Alarm.weekendAlarm;
// }   else alarm=Alarm.weekdayAlarm

// console.log(alarm)


// person.favouriteSongs = [
//     "Since U Been Gone",
//     "Bad Romance",
//     "Sound of Silence",
// ];

// console.log(person.favouriteSongs)

// person.sayHi = () => {
//     console.log(`Hello my name is ${this.name}`)
// };

// const pet = {
//     name: "Fido",
//     typeOfPet: "Dog",
//     age: 4,
//     colour: "Black",
//     eat(){
//         return`${this.name} is eating`
//     },
//     drink(){
//         return`${this.name} is drinking`
//     }
// }
// pet.eat(), pet.drink()

// const coffeeShop = {
//     branch: "",
//     drinksWithPrices: {
//         coffee: 1.50,
//         hotChocolate: 2.00,
//         icedCoffee: 2.00,
//         mochaLatte: 3.00
//     },
//     foodWithPrices: {
//         scone: 2.00,
//         croissant: 1.50,
//         chocolateBrownie: 3.00
//     },
//     drinksOrdered(coffeeNumber, hotChocolateNumber, icedCoffeeNumber, mochaLatteNumber){
//         let drinkString = ``
//         const drinkCost = (coffeeNumber*this.drinksWithPrices.coffee)+(hotChocolateNumber.drinksWithPrices.hotChocolate)+(icedCoffeeNumber*this.drinksWithPrices.icedCoffee)+
//         (mochaLatteNumber*this.drinksWithPrices.mochaLatte)
//         if (coffeeNumber>1) drinkString += `${coffeeNumber} coffees, `; else if (coffeeNumber==1) drinkString += `1 coffee, `
//         if (hotChocolateNumber>1) drinkString += `${hotChocolateNumber} hot chocolates, `; else if (hotChocolateNumber==1) drinkString += `1 hot chocolate, `
//         if (icedCoffeeNumber>1) drinkString += `${icedCoffeeNumber} iced coffees, `; else if (icedCoffeeNumber==1) drinkString += `1 iced coffee, `
//         if (mochaLatteNumber>1) drinkString += `${mochaLatteNumber} moca lattes, `; else if (mochaLatteNumber==1) drinkString += `1 mocha latte, `
//         return drinkString+`for a total of £${drinkCost}`
//     },
//     foodOrdered(sconeNumber, croissantNumber, chocolateBrownieNumber){
//         let foodString = ``
//         const foodCost = (sconeNumber*this.foodWithPrices.scone)+(croissantNumber*this.foodWithPrices.croissant)+(chocolateBrownieNumber*this.foodWithPrices.chocolateBrownie)
//         if (sconeNumber>1) foodString += `${sconeNumber} scones, `; else if (sconeNumber==1) foodString += `1 scone, `
//         if (croissantNumber>1) foodString += `${croissantNumber} croissants, `; else if (croissantNumber==1) foodString += `1 croissant, `
//         if (chocolateBrownieNumber>1) foodString += `${chocolateBrownieNumber} chocolate brownies, `; else if (chocolateBrownieNumber==1) foodString += `1 chocolate brownie`
//         return foodString+`for a total of £${foodCost}`
//     },
//     totalOrdered(){
//         return foodString+drinkString+`for a total of ${foodCost+drinkCost}`
//     },
//     clearOrder(){
//         foodString="", drinkString="", foodCost=0, drinkCost=0, drinkAddition=[0,0,0,0], foodAddition=[0,0,0], console.log (`Order cleared, ready for next customer`)
//     },
//     addDrink(drink){
//         switch (drink){
//             case coffee: drinkAddition[0]++; break;
//             case hotChocolate: drinkAddition[1]++; break;
//             case icedCoffee: drinkAddition[2]++; break;
//             case mochaLatte: drinkAddition[3]++; break;
//             default: console.log(`Unknown drink selected, please verify order and try again.`)
//         }
//     },
//     addFood(food){
//         switch(food){
//             case scone: foodAddition[0]++; break;
//             case croissant: foodAddition[1]++; break;
//             case chocolateBrownie: foodAddition[2]++; break;
//             default: console.log(`Unknown food item selected, please verify order and try again.`)
//         }
//     },
//     submitOrder(){
//         if (foodAddition!= [0,0,0]) this.foodOrdered(foodAddition.join());
//         if (drinkAddition!= [0,0,0,0]) this.drinksOrdered(drinkAddition.join())
//     }
// }

  

   
    
