// week 2 part1
//let and const are block-level variables
//using 'let', the variable is able to be resassigned a value
// 'const' cannot be reassigned
const firstName = 'dave';

// firstName = 'bob'; //this will be an error as firstName was declared w/ 'const' and cannot be reassinged
console.log(firstName);

// = vs == vs ===
// = is the assignment operator
// == is coerce operator
// === is the strict equality operator

const oneValue = 2;
const twoValue = 5;

const adventurous = true;

console.log(oneValue === twoValue);

if (adventurous) {
  console.log('this code will run...');
} else {
  console.log('nothing to see here...');
}

//ternary structure: condition ? truthy part : falsey part;
const myResult = adventurous ? 'Go on a vacation' : 'I have to work...boo!';
console.log(myResult);

const luckyNumber = 18;
let luckyResult; // will be undefined
console.log(luckyResult);

switch (luckyNumber) {
  case 1:
    // console.log('the first one');
    luckyResult = 'the first one';
    break;
  case 2:
    // console.log('the second one');
    luckyResult = 'the second one';
    break;
  default:
    // console.log('some other number');
    luckyResult = 'some other number';
}

console.log('The Lucky Result: ', luckyResult);

//week 3
const animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);
// 3.b. TODO: Create a variable `lastAnimal` and assign it the value of
//      the "last" item in `animalArray`, using its array index.
//      You'll need to console.log `animalArray` and `lastAnimal` to make
//      sure that your code does what you want. (Never trust your code until
//      you have proof that it works!)
const lastAnimal = animalArray[3];
console.log(animalArray);
console.log('the last animal is', lastAnimal);
// 3.c. (STRETCH) TODO: Refactor 3.b to use the `animalArray` variable's .length
//property, rather than the exact (hardcoded) index number of the last item.
const myLastAnimal = animalArray[animalArray.length - 1];
const anotherWayToGetLast = animalArray.at(-1);
console.log('my last animal is... ', myLastAnimal);
console.log('another way to get the last item...', anotherWayToGetLast);
