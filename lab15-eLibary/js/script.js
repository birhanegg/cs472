/**
 * @author Birhane Gebre
 * @since 2020-04-12
 */
$(document).ready(function() {

    //ajax get call 
    $.ajax({
        url: 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/list',
        type: 'GET',
        dataType: 'json',
        // data: { get_param: 'value' },
        success: function(data) {
            // console.log(data);
            let rows = "";
            for (const book in data) {
                rows +=
                    " <tr>" +
                    " <th scope=\"row\">" + data[book].bookId + "</th> " +
                    "<td>" + data[book].isbn + "</td> " +
                    "<td>" + data[book].title + "</td> " +
                    "<td>" + data[book].overdueFee + "</td> " +
                    "<td>" + data[book].publisher + "</td> " +
                    "<td>" + data[book].datePublished + "</td> " +
                    " </tr>";
            }
            //console.log(rows);
            $('#display').append(rows);

        },
        error: function(error) {
            alert(JSON.stringify(error));
        },

    });

    //adding book 

    $("#addform").submit(function(e) {
        const bookForm = document.getElementById("form");
        const isbnTxt = document.querySelector("#isbn");
        const titleTxt = document.querySelector("#bookTitle");
        const overdueTxt = document.querySelector("#overdueFee");
        const publisherTxt = document.querySelector("#publisher");
        const datePublishedTxt = document.querySelector("#date");
        const alertMessage = document.getElementById("alert");
        const alertMessage2 = document.getElementById("alertError");

        e.preventDefault();

        const isbn = isbnTxt.value;
        const title = titleTxt.value;
        const overdue = parseFloat(overdueTxt.value);
        const publisher = publisherTxt.value;
        const datePublished = datePublishedTxt.value;

        const newBookData = {
            "isbn": isbn,
            "title": title,
            "overdueFee": overdue,
            "publisher": publisher,
            "datePublished": datePublished
        };

        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "post",
            body: JSON.stringify(newBookData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsonResponseData) {
            console.log(jsonResponseData);
            alertMessage.style.display = "block";
            //clean inputs
            isbnTxt.value = "";
            titleTxt.value = "";
            overdueTxt.value = "0.00";
            publisherTxt.value = "";
            datePublishedTxt.value = "";

            titleTxt.focus();
        }).catch(function(error) {
            console.error(error);
            alertMessage2.style.display = "block";
        })
    });
    //
});