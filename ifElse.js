// let age = 21
// if (age >= 17){
//     console.log (`Yes I can serve you`)
// }
// else console.log(`You aren't old enough`)

// age = 15

// if (age >= 17){
//     console.log (`Yes I can serve you`)
// }
// else console.log(`You aren't old enough`)

// let preference = 'neutral'
// let topping = `pepperoni`
// switch(true){
//     case preference == 'fave': console.log(`These are important ingedients for my pizza`); break
//     case preference == 'neutral': console.log(`I don't mind having ${topping} on my pizza`); break
//     case preference == 'decline': console.log(`${topping} does not belong on a pizza`); break
    
// }

// let password = 'asdk555v';
// let length = password.length;
// console.log(length)
// (length >= 8) ? console.log(password):console.log(`Password is too short`);

// let num = 53466

// if (num%5==0||num%3==0){
//     console.log(`"This number is divisible by 3 or 5"`)
// }
// else console.log(`something else`)

// let num = 456459
// if (num%5==0||num%3==0){
//     console.log(`fizz buzz`)
// }
// else if (num%3==0){
//     console.log(`buzz`)
// } 
// else if (num%5==0){
//     console.log(`fizz`)
// }
// else console.log(num)

// let num = "10501"
// const length = num.length
// let numArray = []
// let revArray = []
// let isPalindrome = true
// for (let i=length-1; i >= 0; i--){
//     revArray.push(num.charAt(i))
// }
// for (let i=0; i<=length-1; i++){
//     numArray.push(num.charAt(i))
// }
// if (numArray.join()!=revArray.join()) isPalindrome=false
// if (isPalindrome==true) console.log(`Palindrome`)
// else console.log (`Non-palindrome`)

// let sampleString = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`
// let stringLength = sampleString.length
// let vowelIndex = 0
// for (let i=0; i<stringLength-1; i++){
//     if (sampleString.charAt(i) == 'a'|| sampleString.charAt(i) == `i` || sampleString.charAt(i) == `e` || sampleString.charAt(i) == 'o' || sampleString.charAt(i) == 'u') vowelIndex=i
// }
// console.log(`The last vowel is at position ${vowelIndex}`)


// let word = `alpha`
// if (word.charAt(0)==word.charAt(word.length-1)) console.log(`True`)
// else console.log(`false`)

let num1 = 16457
let num2 = 645674
if ((num1+num2)%2==0) console.log(num1+num2)
else console.log(num1*num2)