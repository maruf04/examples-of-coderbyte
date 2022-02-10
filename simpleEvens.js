// Simple Evens
// Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.
// Examples
// Input: 2222220222
// Output: true
// Input: 20864646452
// Output: false

function SimpleEvens(num) {

    // code goes here  
    return (num % 2 == 0) ? true : false;

}

// keep this function call here 
console.log(SimpleEvens(readline()));

//10 üzerinden 8 puan alındı bi eksik var