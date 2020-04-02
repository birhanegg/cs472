//-----------------q1
function test() {
    var x = 1;
    var a = 5;
    var b = 10;
    var c = function() {
        document.write(x);
        document.write(a);
        var f = function(a, b, c) {
            b = c;
            document.write(b);
            c = c;
            var x = 5;
        }
        f(a, b, c);
        document.write(b);
        var x = 10;
    }
    c(8, 9, 10);
    document.write(b);
    document.write(x);
}

test();

//------------q4
var x = 9;

function func() {
    return x * x;
}
console.log(func())
x = 5;
console.log(func())


//-----------------q5

var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo)
}
bar();