// Happy Numbers
// Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

// For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.
// Examples
// Input: 1
// Output: true
// Input: 101
// Output: false

//5 puan alındı bundan 10 üzerinden

function HappyNumbers(num) {
    var digits = num.toString().split('');
    var realDigits = digits.map(Number);
    let sum = 0;
    for (let i = 0; i < realDigits.length; i++) {
        sum += realDigits[i];
        if (sum > 1)
            return false;
    }
    return true;

}

// keep this function call here 
console.log(HappyNumbers(readline()));