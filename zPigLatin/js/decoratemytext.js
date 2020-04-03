/**
 * decoratemytext.js
 * 
 * @author O. Kalu
 * @since 2020-04-01
 */

window.onload = function() {
    "use strict";

    const btnBiggerDecorations = this.document.querySelector("#btnBiggerDecorations");
    btnBiggerDecorations.addEventListener("click", setupBiggerDecorationsTimer);
    let biggerDecorationsEventTimer;

    function setupBiggerDecorationsTimer(event) {
        biggerDecorationsEventTimer = setInterval(doBiggerDecorations, 2000);
    }

    function doBiggerDecorations() {
        const textAreaText = document.querySelector("#textAreaText");
        const strCurrFontSize = textAreaText.style.fontSize;
        const numCurrentFontSize = strCurrFontSize.substring(0, strCurrFontSize.length - 2);
        let intNewFontSize = parseInt(numCurrentFontSize) + 2;
        textAreaText.style.fontSize = intNewFontSize + "pt";
        console.log("current fontsize: " + textAreaText.style.fontSize);
    }

    const chkBling = this.document.querySelector("#chkBling");
    chkBling.addEventListener("change", doBling);

    function doBling(event) {
        const textAreaText = document.querySelector("#textAreaText");
        if (event.target.checked) {
            textAreaText.style.fontWeight = "bold";
            textAreaText.style.color = "green";
            textAreaText.style.textDecoration = "underline";
        } else {
            textAreaText.style.fontWeight = "normal";
            textAreaText.style.color = "black";
            textAreaText.style.textDecoration = "none";
        }
    }

    const btnCancelBiggerDecorations = document.querySelector("#btnCancelBiggerDecorations");
    btnCancelBiggerDecorations.addEventListener("click", cancelBiggerDecorationsTimer);

    function cancelBiggerDecorationsTimer(event) {
        clearInterval(biggerDecorationsEventTimer);
    }

    const textAreaText = document.querySelector("#textAreaText");
    const btnResetText = this.document.querySelector("#btnResetText");
    btnResetText.addEventListener("click",
        event => {
            textAreaText.value = "Sample Item 1" + "\n" + "\n" + " " + "Sample Item 2";
            textAreaText.style.fontSize = "8pt";
        }
    );
    // Converting to pig latin

    //     btnConvertTextToPigLatin.addEventListener("click",
    //         event => {
    //             const str = document.querySelector("#textAreaText").value;
    //             var newStrArray = str.split('');
    //             for (var i = 0; i < newStrArray.length; i++) {
    //                 var letter = newStrArray[0];
    //                 if (i === 0) {
    //                     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    //                         newStrArray.push('way');
    //                         break;
    //                     } else {
    //                         newStrArray.push(newStrArray.splice(0, 1)[0]);
    //                     }
    //                 } else {
    //                     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    //                         newStrArray.push('ay');
    //                         break;
    //                     } else {
    //                         newStrArray.push(newStrArray.splice(0, 1)[0]);
    //                     }
    //                 }
    //             }
    //             newStrArray.join('');

    //             document.querySelector("#textAreaText").value = newStrArray.join('');

    //         }
    //     );

    // };



    // Converting to pig latin
    const btnConvertTextToPigLatin = this.document.querySelector("#btnConvertTextToPigLatin");
    btnConvertTextToPigLatin.addEventListener("click",
        event => {
            let newText = "";
            const currentText = document.querySelector("#textAreaText").value;
            console.log(currentText);
            const wordsArray = currentText.split(" ");
            document.querySelector("#textAreaText").value = newText;
        }
    );

};


/*


function translatePigLatin(str) {
    var newStrArray = str.split('');
    for (var i = 0; i < newStrArray.length; i++) {
        var letter = newStrArray[0];
        if (i === 0) {
            if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
                newStrArray.push('way');
                break;
            } else {
                newStrArray.push(newStrArray.splice(0, 1)[0]);
            }
        } else {
            if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
                newStrArray.push('ay');
                break;
            } else {
                newStrArray.push(newStrArray.splice(0, 1)[0]);
            }
        }
    }
    return newStrArray.join('');
}
console.log(translatePigLatin("pig"));
console.log(translatePigLatin("latin"));

*/