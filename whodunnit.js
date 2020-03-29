
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




