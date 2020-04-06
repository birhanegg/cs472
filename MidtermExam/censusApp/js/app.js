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
        console.log("--------asdfsd  sdff");
        let citizenID = $("#citizenID").val();
        let fullName = $("#fullName").val();
        let state = $("#state").val();
        let accountNo = $("#accountNo").val();
        let yesSenior = $("input[name='senior']:checked").val();
        // console.log(citizenID);
        // console.log(fullName);
        // //onsole.log("state: " + state);
        // console.log(accountNo);
        // console.log(yesSenior);

        let tr = `<tr> 
        <td>${citizenID} </td>
        <td>${state} </td>
        <td>${fullName} </td>
        <td>${accountNo} </td>
        <td>${yesSenior} </td></tr> `;


        console.log(tr);
        $('#listOfPeople').append(tr);

        $("#fullName").empty();
        $("#citizenID").empty();
        $("#accountNo").empty();
        $("#senior").empty();
    });

});