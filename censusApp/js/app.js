/**
 * file : app.js 
 * 
 * @author Birhane Gebre
 * @since 2020-04-06
 */

$(document).ready(function() {

    "use strict";

    $("#newAccountForm").submit(function(event) {

        event.preventDefault();

        let accountNumber = $("#accountNumber").val();
        let customerName = $("#customerName").val();
        let typeOfAccount = $("#typeOfAccount").val();


        $("#customerAccountList").append($("<li>", {
            "class": "list-group-item active",
            "text": "List of Customer Accounts"
        }));

        $("#customerAccountList").append($("<li>", {
            "class": "list-group-item",
            "text": `${accountNumber} | ${customerName} | ${typeOfAccount}`
        }));

        $("#accountNumber").empty();
        $("#customerName").empty();
        $("#typeOfAccount").empty();
    });
});