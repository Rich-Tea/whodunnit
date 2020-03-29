
// Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

// This should run properly, returning string 'The murderer is Miss Scarlet', as it is doesn't try to change the value of any constants in returning the verdict

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// This will return an error, as it tries to change a constant (const murderer from 'Professor Plum' to 'Mrs. Peacock'), but const is immutable (can't be changed)

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// This will return two verdicts: the first being Mrs. Peacock, then Professor Plum.
// Reason: Mrs. Peacock's verdict is returned first, using the declareMurderer() function, which was defined in block scope using const. The murderer variable was reassigned to Mrs. Peacock in this block also, but this is fine as it was done with let, which can be reassigned.
// Professor Plum's verdict is returned second, using a const assignment (secondVerdict) which references the initial let variable defined in the first line. The reason this doesn't return Mrs. Peacock is because her name was defined with let within block scope, which means it can't be accessed outside of that block. Professor Plum was assigned with let outside of a block, so his name can be called again from the first line let variable.

// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// First this will return: Miss Scarlet, Professor Plum, and Colonel Mustard. This is returned with the block within the first declareAllSuspects function call, where suspectThree is reassigned to Colonel Mustard. This reassignment is possible because it uses let and is performed with the block.
// Secondly it will return: only Mrs. Peacock, as we are logging suspectThree to the console - suspectThree in this case is the initial let variable defined on line 61. The reason it doesn't return Colonel Mustard as suspectThree is because his reassignment was performed with let within a block (lines 63-66), and let variables within blocks are not accessible outside of that block. Mrs. Peacock was defined with let also, but not inside a block, so Mrs. Peacock as suspectThree is accessible and can be called again.

// Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

// This will return: "The weapon is the Revoler". The weapon was changed from 'Candle Stick' (defined on line 80) to 'Revoler' using the changeWeapon function created on line 83. 
// The weapon can be changed from 'Candle Stick' to 'Revolver' because with changeWeapon we are changing the weapon property of the scenario (scenario.weapon). Even though the scenario object was defined using const, the weapon property within it can be reassigned. This is because we can reassign properties of objects (in this case the weapon property of the scenario object) even when the object is defined with const - what we can't do is reassign the object itself. So the scenario object cannot be reassigned, but the properites held within it can.