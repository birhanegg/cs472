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