var val1;
var val2;
var val3;
val1 = null;
val2 = 'What a lovely day we are having';
val3 = ['What', 'a', 'lovely', 'day', 'we', 'are', 'having'];
function printAll(val) {
    if (val !== null) {
        if (typeof val === 'string')
            console.log(val);
        else if (typeof val === 'object') {
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var s = val_1[_i];
                console.log(s);
            }
        }
    }
}
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
;
;
function doSomething(animal) {
    if ("swim" in animal) {
        console.log(animal.swim());
    }
    else if ("fly" in animal) {
        console.log(animal.fly());
    }
}
var parrot = { fly: function () { return 'I can Fly & maybe even talk'; } };
var shark = { swim: function () { return 'I can Swim! & maybe even eat that ass'; } };
var human = {};
doSomething(parrot);
doSomething(shark);
doSomething(human);
