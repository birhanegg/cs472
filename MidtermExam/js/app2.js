/**
 * file : app.js 
 * 
 * @author Birhane Gebre
 * @since 2020-04-06
 */

function arrayUtils() {

    var multiplesCount = function(arr, base) {
        const multiples = arr.filter(function(value) {
            return value % base === 0;
        })
        return multiples.length;
    }

    var reverseInPlace = function(arr) {
        const newArray = arr.reverse();
        return newArray;
    }


    return {
        multipleCount: multiplesCount,
        reverseInPlace: reverseInPlace
    }
}
//console.log(multiplesCount([1,2,3,4,5,6], 3);  //return 2; 
//console.log(multiplesCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));  return 3; 


console.log(reverseInPlace([1, 2, 3, 4, 5, 6]))


const array = [];
array.printTheName = function(fullname) {
    console.log(fullname)
}

array.printTheName("Anna H. Smith");
array.printTheName("Bob J. Harrison");