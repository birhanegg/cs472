//"use strict";
//generic logger 
const log = (...args) => {
    return console.log(args);
}

var var1 = document.getElementById("demo");
var1.innerHTML = "this is from <b>DOM</b>";



let foo = 1;

function bar() {
    if (!foo) {
        let foo = 10;
    }
    alert(foo);
}
bar();