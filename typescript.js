"use strict";
// boolean
var isCool = true;
// number
var age = 25;
// string
var eyeColor = 'brown';
var favouriteQuote = "To be or not to be, that's a " + eyeColor;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'phoenix'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// ! Any
var whatever = 'aghhhhh nooooo!!!!';
whatever = true;
// void
var sing = function () {
    console.log('lalala');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalla';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWRRRR');
lion.greet();
// Union
var confused = 5;
