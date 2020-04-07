/**
 * file : app.js 
 * 
 * @author Birhane Gebre
 * @since 2020-04-06
 */

$(document).ready(function() {

    "use strict";
    document.getElementById("spanDate").innerHTML = new Date();
    $("#cenusesform").submit(function(event) {

        event.preventDefault();

        let citizenID = $("#citizenID").val();
        let fullName = $("#fullName").val();

        let state = $("#state").val();
        console.log(state);
        let ssn = $("#ssn").val();
        let yesSenior = $("input[name='senior']:checked").val();

        let tr = `<tr> 
          
        <td>${citizenID} </td>
        <td>${ssn} </td>  
        <td>${fullName} </td>          
        <td>${state} </td>  
        <td>${yesSenior} </td></tr> `;


        //console.log(tr);
        $('#listOfPeople').append(tr);

        $("#fullName").val('');
        $("#citizenID").val('');
        $("#ssn").val('');
        $("#senior").val('');
    });

});



//moodule patthern 
function arrayUtils() {

    var multiplesCount = function(arr, base) {
        const multiples = arr.filter(function(value) {
            return value % base === 0;
        })
        return multiples.length;
    }

    var reverseInPlace = function(arr) {
        const newArray = arr.reverse();
        return newArray;
    }


    return {
        multipleCount: multiplesCount,
        reverseInPlace: reverseInPlace
    }
}
const check = new arrayUtils();
console.log(check.reverseInPlace([1, 2, 3, 4, 5, 6]));
console.log(check.multipleCount([1, 2, 3, 4, 5, 6], 3));


//adding printTheName  function 
const array = [];
array.printTheName = function(fullname) {
    console.log(fullname)
}

array.printTheName("Anna H. Smith");
array.printTheName("Bob J. Harrison");