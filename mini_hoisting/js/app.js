/**
 * file : app.js 
 * 
 * @author Birhane Gebre
 * @since 2020-04-06
 */

"use strict";

//Implementing JavaScript objects and Inheritan
const car = {
    make: 'default',
    model: 'default',
    color: 'default',

    drive: function(speed) {
        return console.log("The " +
            this.color + " " +
            this.make + " " +
            this.model +
            " is driving at " +
            speed + " mph");
    },
    stop: function() {
        return console.log("The " +
            this.color + " " +
            this.make + " " +
            this.model +
            " is stopping");
    }
}
let RedHondaAccord = Object.create(car);
RedHondaAccord.color = "red";
RedHondaAccord.make = "Honda";
RedHondaAccord.model = "Accord";
// RedHondaAccord.drive(200);
//RedHondaAccord.stop();


//using a Constructor function

function Car(color, make, model) {
    this.color = color;
    this.make = make;
    this.model = model;


    this.drive = function(speed) {
        return console.log("The " +
            this.color + " " +
            this.make + " " +
            this.model +
            " is driving at " +
            speed + " mph");
    };
    this.stop = function() {
        return console.log("The " +
            this.color + " " +
            this.make + " " +
            this.model +
            " is stopping");
    };
}

let RedHondaAccord2 = new Car("red", "Honda", "Accord");
// RedHondaAccord2.drive(300);
//RedHondaAccord2.stop();


function multipleCount(numbers, base) {
    const multiples = numbers.filter(
        function(value) {
            return value % base === 0;
        });

    return multiples;
}




//Modules Pattern
const arrayUtils = (function() {
    const multiplesCount = function(numbers, base) {
        const multiples = numbers.filter(
            function(value) {
                return value % base === 0;
            });

        return multiples;
    }
    return {
        multiplesCount: multiplesCount
    };

})();

console.log(arrayUtils.multiplesCount([1, 2, 3, 4, 5, 6], 3)); // return 2; 
console.log(arrayUtils.multiplesCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5)); // return 3;


//reverse array :
function reverseInPlace(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let temp = arr[i]; // using swapping the first element with the last element 
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseInPlace([1, 2, 3, 4, 5, 6])); //return [6,5,4,3,2,1];

//Extend array
Array.prototype.printTheName = function(fullName) {
    return console.log(this.fullName);
};
Array.printTheName(“Anna H.Smith”);
Array.printTheName(“Bob J.Harrison”);