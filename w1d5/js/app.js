"use strict";
//question-1
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

//console.log(max(5, 4));
//console.log(max(10, 20));

//question-2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3)
            return num1;
        else {
            if (num2 > num3)
                return num2; //?
            else
                return num3;
        }
    } else {
        if (num2 > num3)
            return num2;
        else
            return num3;
    }
}

//console.log(maxOfThree(5, 7, 4));
//console.log(maxOfThree(10, 5, 20));

//question-3
function isVowel(c) {
    switch (c) {
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'a':
        case 'A':
        case 'o':
        case 'O':
            return true;
        default:
            return false;
    }
}

console.log(isVowel('a'));
console.log(isVowel("b"));
console.log(isVowel("e"));
console.log(isVowel('E'));

//question-4
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function multiply(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}


console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));

//question-5
function reverse(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverse("jag testar"));
console.log(reverse("birhane gebre"));

//question-6
function findLongestWord(words) {
    let longest = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}

console.log(findLongestWord(["hani", "welela", "Birhane", "kalu"]))


//question-7
function filterLongWords(words, len) {
    let filter = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > len) {
            filter.push(words[i]);
        }
    }
    return filter;
}

console.log(filterLongWords(["hani", "welela", "Birhane", "kalu"], 4))



//question-8
function computeSumOfSquares(numbers) {
    return numbers.map(function(n) { return Math.pow(n, 2); }).reduce(function(sum, n) { return sum + n; });
}

console.log(computeSumOfSquares([1, 2, 3]));


//question-9
function printOddNumbersOnly(numbers) {
    return numbers.map(function(n) { return Math.pow(n, 2); }).reduce(function(sum, n) { return sum + n; });
}


//15


function display_ct() {
    var x = new Date()
    var x1 = x.toUTCString(); // changing the display to UTC string
    document.getElementById('ct').innerHTML = x1;
    tt = display_c();
}

function display_ct() {
    var x = new Date()
    var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getYear();
    x1 = x1 + " - " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('ct').innerHTML = x1;
    display_c();
}

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
}