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
        let ssn = $("#ssn").val();
        let yesSenior = $("input[name='senior']:checked").val();
        // console.log(citizenID);
        // console.log(fullName);
        // //onsole.log("state: " + state);
        // console.log(ssn);
        // console.log(yesSenior);

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