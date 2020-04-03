/**
 * app.js for lab w2d4
 * 
 * @author Birhane Gebre
 * @since 2020-04-02
 */


//=======  Question-1 ==========
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
    john.dateOfBirth = "1998-12-10";

    console.log(`\"The Persons name is  ${john.getName()}\"`);
    console.log(`\"${john.name} was born in  ${john.dateOfBirth}\"`);


    //=======  Question-2 ==========

    let Employee = Object.create(person);
    Employee = {
        salary: 0,
        hireDate: Date.now(),
        doJob: function(jobTitle) {
            console.log(Employee.name + " is a " + jobTitle + " who earns $" + this.salary);
        }
    };

    Employee.name = "Anna";
    Employee.salary = 249995.50;
    Employee.doJob("Programmer");


    //=======  Question-3 ==========

    function Person(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.toString = function() {
            return "{Name: " + this.name + ", DateOfBirth : " + this.dateOfBirth + "}";
        }
    }
    let peter = new Person("Peter", "November 10, 1985");
    console.log(peter.toString());

    //=======  Question-4 ==========
    //Q4 solution shown below and also in github 
    //https://birhanegg.github.io/cs472/w1d4/index.html  //link
    /*
    <script>
        $(document).ready(function() {
            //webform1
            $("#webform1").submit(function(event) {
                console.log(document.getElementById("email").value);
                console.log(document.getElementById("password").value);
                console.log(document.getElementById("url").value);
                event.preventDefault();
            });
            //webform2
            $("#webform2").submit(function(event) {
                console.log(document.getElementById("productNumber").value);
                console.log(document.getElementById("productName").value);
                console.log(document.getElementById("unitPrice").value);
                console.log(document.getElementById("supplier").value);
                console.log(document.getElementById("supplyDate").value);
                event.preventDefault();
            });
        });
    </script>
    */

};