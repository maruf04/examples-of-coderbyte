// Run Length
// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// Examples
// Input: "aabbcde"
// Output: 2a2b1c1d1e
// Input: "wwwbbbw"
// Output: 3w3b1w


//kod tam uymadı 0 puan alındı bundan

// RunLength(str) method letter only
function RunLength(str) {
    var arr = str.split("")
    //remove all but letters from array
    arr = arr.filter(function (x) {
        return /[a-z]/i.test(x);
    });
    var newArr = [];
    var count = 1;
    var letter = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            letter = arr[i];
            newArr.push(letter + count);
            count = 1;
        }

    }
    // code goes here  
    return newArr.join("");

}

// keep this function call here 
console.log(RunLength(readline()));