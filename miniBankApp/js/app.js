/**
 * file : app.js 
 * 
 * @author Birhane Gebre
 * @since 2020-04-06
 */
"use strict";
$(document).ready(function() {

    $("#newAccountForm").submit(function(event) {

        event.preventDefault();

        let accountNumber = $("#accountNumber").val();
        let customerName = $("#customerName").val();
        let typeOfAccount = $("#typeOfAccount").val();

        $("#customerAccountList").append($("<li>", {
            "class": "list-group-item",
            "text": `${accountNumber} | ${customerName} | ${typeOfAccount}`
        }));

        document.getElementById("accountNumber").value = "";
        document.getElementById("customerName").value = "";
        document.getElementById("typeOfAccount").value = "";
    });
});