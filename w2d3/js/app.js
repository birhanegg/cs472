/**
 * app.js for lab w2d3
 * 
 * @author Birhane Gebre
 * @since 2020-04-02
 */


//---------------------Question-1 ---------------------------


window.onload = function() {
    "use strict";

    let person = {
        name: "",
        dateOfBirth: "",
        setName: function(newName) {
            this.name = newName;
        },
        getName: function() {
            return this.name;
        }
    };

    let john = Object.create(person);
    john.setName("John");
    john.dateOfBirth = new Date(1998, 12, 10);

    console.log(`\"The Persons name is  ${john.getName()}\"`);
    console.log(`\"${john.name} was born in  ${john.dateOfBirth}\"`);
    let dob = john.name + " was born in";
    dob += john.dateOfBirth.getFullYear() + "-";
    dob += john.dateOfBirth.getFullYear() + "-"

    console.log(dob);


    //---------------------Question-2 ---------------------------

    let Employee = Object.create(person);
    Employee = {
        salary: 0,
        hireDate: new Date(),
        doJob: function(jobTitle) {
            console.log(Employee.name + " is a " + jobTitle + " who earns $" + this.salary);
        }
    };

    Employee.name = "Anna";
    Employee.salary = 249995.50;
    Employee.doJob("Programmer");


    let employee = {
        salary: 0.0,
        hireDate: new Date(),
        //__proto__: person, //bad practice 
        person,
        doJob: function(title) {
            console.log("========================================");
            console.log("Inside Employe");
            console.log("========================================");
            console.log(`${this.name} is a ${title} who earns $ ${this.salary}`);
        }
    };
    const anna = Object.create(employee);
    anna.name = "Anna";
    anna.salary = 249295.50;
    anna.doJob("Programmer");

    //---------------------Question-3 ---------------------------

    function Person(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.toString = function() {
            return "{Name: " + this.name + ", DateOfBirth : " + this.dateOfBirth + "}";
        }
    }
    let peter = new Person("Peter", "November 10, 1985");
    console.log(peter.toString());


    //---------------------Question-4 ---------------------------

    //Q4 solution shown below and also in github 
    //https://birhanegg.github.io/cs472/w1d4/index.html  //link

    //webform1
    /*
    $("#webform1").submit(function(event) {
        console.log($("#email").val());
        console.log($("#password").val());
        console.log($("#url").val());
        event.preventDefault();
    });
    //webform2
    $("#webform2").submit(function(event) {
        console.log($("#productNumber").val());
        console.log($("#url").val());
        console.log($("#productName").val());
        console.log($("#unitPrice").val());
        console.log($("#supplier").val());
        console.log($("#supplyDate").val());
        event.preventDefault();
    });
*/
};