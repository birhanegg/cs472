/**
 * app.js for lab
 * 
 * @author Birhane Gebre
 * @since 2020-04-02
 */
$(document).ready(function() {
    //webform1
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
        window.alert("Product Name: " + prodName + " \nName: " + name + " \nUnit Price: " + unitP + " \nQuantity In Stock: " + quantityInStock + " \nSupplier: " + "\nDate: " + dateSup);
        event.preventDefault();
    });
});