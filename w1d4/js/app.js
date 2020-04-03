/**
 * app.js for lab
 * 
 * @author Birhane Gebre
 * @since 2020-04-02
 */
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