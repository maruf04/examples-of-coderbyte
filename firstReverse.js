// Input: "coderbyte"
// Output: etybredoc

function FirstReverse(str) {
    strReverse = ""
    for (let i = str.length - 1; i > -1; i--) {
        strReverse = strReverse + str[i]
    }
    return strReverse;
}
// keep this function call here
console.log(FirstReverse(readline()));