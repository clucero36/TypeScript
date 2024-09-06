

type sentence = string | string [] | null


let val1: sentence;
let val2: sentence;
let val3: sentence;

val1 = null;
val2 = 'What a lovely day we are having';
val3 = ['What', 'a', 'lovely', 'day', 'we', 'are', 'having'];

function printAll(val: string | string[] | null) {
  if (val !== null) {
    if (typeof val === 'string')
      console.log(val);
    else if (typeof val === 'object') {
      for (const s of val) {
        console.log(s);
      }
    }
  }
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    console.log(x.toUpperCase());
          
    console.log(y.toLowerCase());
          
  } else {
    console.log(x);
               
    console.log(y);
  }
}

interface Fish {swim: () => string};
interface Bird {fly: () => string}
interface Human {swim?: () => null | string, fly?: () => null};

function doSomething(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    console.log(animal.swim());
  }
  else if ("fly" in animal) {
    console.log(animal.fly());
  }
}

let parrot: Bird = {fly: () => 'I can Fly & maybe even talk'};
let shark: Fish = {swim: () => 'I can Swim! & maybe even eat that ass'};
let human: Human = {}

doSomething(parrot);
doSomething(shark);
doSomething(human);

