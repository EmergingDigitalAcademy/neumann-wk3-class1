// week 2 part1
//let vs const

let firstName = 'dave';

firstName = 'bob';
console.log(firstName);

//= vs == vs ===
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

//ternary: if condition ? truthy : falsey;
let myResult = adventurous ? 'Go on a vacation' : 'I have to work...boo!';
console.log(myResult);

const luckyNumber = 18;
let doSomething; // will be undefined
console.log(doSomething);

switch (luckyNumber) {
  case 1:
    console.log('the first one');
    break;
  case 18:
    // console.log('the second one');
    doSomething = 'the second one';
    break;
  default:
    console.log('some other number');
}

console.log(doSomething);

//week 3
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);
// 3.b. TODO: Create a variable `lastAnimal` and assign it the value of
//      the "last" item in `animalArray`, using its array index.
//      You'll need to console.log `animalArray` and `lastAnimal` to make
//      sure that your code does what you want. (Never trust your code until
//      you have proof that it works!)
let lastAnimal = animalArray[3];
console.log(animalArray);
console.log('the last animal is', lastAnimal);
// 3.c. (STRETCH) TODO: Refactor 3.b to use the `animalArray` variable's .length
//property, rather than the exact (hardcoded) index number of the last item.
let myLastAnimal = animalArray[animalArray.length - 1];
console.log('my last animal is... ', myLastAnimal);
