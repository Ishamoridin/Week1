let humanName = "George"
let age = 24
let occupation = "plumber"
let hasPet = 1
let petSpecies = "Dog"
let petName = "Spot"

if (hasPet = 1) console.log(`Hi, my name is ${humanName} and I am a ${age} year old ${occupation}. I have a ${petSpecies} named ${petName} whom I love very much.`);
if (hasPet = 0) console.log(`Hi, my name is ${humanName} and I am a ${age} year old ${occupation}. I don't have any pets.`);

humanName = "Sally"
age = "34"
occupation = "author"
hasPet = 0

if (hasPet = 1) console.log(`Hi, my name is ${humanName} and I am a ${age} year old ${occupation}. I have a ${petSpecies} named ${petName} whom I love very much.`); else console.log(`Hi, my name is ${humanName} and I am a ${age} year old ${occupation}. I don't have any pets.`);
