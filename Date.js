let birthDate = Date.parse(`1989, 6, 30`);
let todayDate = Date.now();
let timeAlive = todayDate - birthDate;
let daysAlive = Math.floor(timeAlive/86400000);
console.log(`I am ${daysAlive} days old today`);