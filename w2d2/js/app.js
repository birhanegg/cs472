/* 
    author : Birhane Gebre
    lab : 2WD2
*/
"use strict";
//generic logger 
const log = (...args) => {
    return console.log(args);
}

// =============  Question-6 ==========
var count = (function() {
    var counter = 0;
    return {
        add: function() {
            return ++counter;
        },
        reset: function() {
            return counter = 0;
        }
    }
})();

console.log(count.add());
console.log(count.reset());

// =============  Question-7 ==========
// add()  has  "counter" free variable 
// free variable is a  variable used in a function that are not local variables nor parameters of that function


// =============  Question-8 ==========
var count = (function() {
    var counter = 0;
    return {
        add: function() {
            return counter += 1;
        },
        reset: function() {
            return counter = 0;
        },
        make_adder: function(inc) {
            return function() { return counter += inc; };
        }
    }
})();

var add5 = count.make_adder(5);
console.log(count.make_adder(5)());
console.log(add5());
console.log(add5());

console.log(count.reset());
var add7 = count.make_adder(7);
console.log(add7());
console.log(add7());
console.log(add7());

// =============  Question-9 ==========
//  Use Object Literalsor  or Module Patterns

// =============  Question-10 ==========

var Employee =
    (function() {
        //fields
        let name;
        let age;
        let salary;
        //getter & setter methods
        let setAge = function(newAge) { this.age = newAge };
        let setSalary = function(newSalary) { this.salary = newSalary };
        let setName = function(newName) { this.name = newName };
        let getAge = function() { return this.age; };
        let getSalary = function() { return this.salary; };
        let getName = function() { return this.name; };

        //other methods
        let increaseSalary = function(percentage) {
            setSalary(getSalary() + (getSalary() * percentage))
        };
        let incrementAge = function() { setAge(getAge() + 1) };
        return {
            setAge: setAge,
            setSalary: setSalary,
            setName: setName,
            getSalary: getSalary,
            increaseSalary: increaseSalary,
            incrementAge: incrementAge
        };

    })();

Employee.setSalary(90000);
console.log(Employee.getSalary()); //90000

// =============  Question-11 ==========

Employee.address = "";
Employee.setAddress = function(newAddress) { address = newAddress; };
Employee.getAddress = function() { return address; };

//ingergrating with Q10
var Employee =
    (function() {
        //fields
        let name;
        let age;
        let salary;
        let address;
        //getter & setter methods
        let setAge = function(newAge) { this.age = newAge };
        let setSalary = function(newSalary) { this.salary = newSalary };
        let setName = function(newName) { this.name = newName };
        let getAge = function() { return this.age; };
        let getSalary = function() { return this.salary; };
        let getName = function() { return this.name; };

        //other methods
        let increaseSalary = function(percentage) {
            setSalary(getSalary() + (getSalary() * percentage))
        };
        let incrementAge = function() { setAge(getAge() + 1) };
        let setAddress = function(newAddress) { address = newAddress; };
        let getAddress = function() { return address; };
        return {
            setName: setName,
            setAge: setAge,
            setSalary: setSalary,
            increaseSalary: increaseSalary,
            incrementAge: incrementAge,
            getAddress: getAddress,
            setAddress: setAddress
        };

    })();

Employee.setAddress("MIU");
console.log(Employee.getAddress()); //MIU