"use strict";
//generic logger 
const log = (...args) => {
    return console.log(args);
}

//question-1
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

//console.log("Question-1 : " +max(5, 4));
//console.log("Question-1 : " +max(10, 20));

//question-2
function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3)
        return n1;
    else if (n2 > n1 && n2 > n3)
        return n2;
    else
        return n3;
}

//console.log("Question-2: " +maxOfThree(5, 7, 4));
//console.log("Question-2: " +maxOfThree(10, 5, 20));

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

console.log("Question-6 : " + findLongestWord(["hani", "welela", "Birhane", "kalu"]))


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

console.log("Question-7: " + filterLongWords(["hani", "welela", "Birhane", "kalu"], 4))


//question-8
function computeSumOfSquares(numbers) {
    return numbers.map((n) => n * n).reduce((sum, n) => sum + n);
}

log("Question-8 : " + computeSumOfSquares([1, 2, 3]));


//question-9
function printOddNumbersOnly(numbers) {
    var odds = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 1)
            odds.push(numbers[i]);
    }
    return odds;
}

log("###################");

log("Question-9 : " + printOddNumbersOnly([1, 2, 3, 4, 5, 6])); // [1, 3, 5]

//question-10
function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers.filter(n => n % 2 === 0).map(n => n * n).reduce((sum, n) => sum + n);
}

console.log("Question-10: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5])); //20

//question-11
function sum(numbers) {
    return numbers.reduce((x, y) => x + y, 0);
}

function multiply(numbers) {
    return numbers.reduce((x, y) => x * y, 1);
}

console.log(sum([1, 2, 3, 4])); //10
console.log(multiply([1, 2, 3, 4])); //24


//question-12
function findSecondBiggest(numbers) {
    var max1 = numbers[0];
    var max2 = -Infinity;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max1) {
            max2 = max1;
            max1 = numbers[i];
        } else if (numbers[i] > max2 && numbers[i] !== max1) {
            max2 = numbers[i];
        }
    }
    return max2;
}
console.log("Question-12 : " + findSecondBiggest([19, 9, 11, 0, 12])); //12


//question-13
function printFibo(n, a, b) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = a;
    fib[1] = b;
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

console.log("Question-13:" + printFibo(7, 0, 1)); //) [0, 1, 1, 2, 3, 5, 8]

//question-14
//done in separate file 

//question-15
//done in separate file