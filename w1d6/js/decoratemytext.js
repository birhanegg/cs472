window.onload = function() {

    "use strict";

    var bigBtn = document.getElementById("docBig");
    bigBtn.onclick = bigApply;

    function docorateBig() {
        var textArea = document.getElementById("orginalText"),
            style = window.getComputedStyle(textArea),
            fontSize = style.getPropertyValue('font-size');
        var fontBigger = parseInt(fontSize) + 2;
        document.getElementById("orginalText").style.fontSize = fontBigger.toString() + "px";
    }

    function bigApply() {
        setInterval(docorateBig, 200);
    }
    $(document).ready(function() {
        $('input[type="checkbox"]').click(function() {
            if ($(this).prop("checked") === true) {
                document.getElementById("orginalText").className = "bold";
                document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            } else if ($(this).prop("checked") === false) {
                document.getElementById("orginalText").className = "normalText";
            }
        });
    });
};