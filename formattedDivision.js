//medium
// Input: 10 & num2 = 10
// Output: 1.0000

// Formatted Division
// Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.

function FormattedDivision(num1, num2) {
    if (num1 != 0 && num2 != 0) {
        number = (num1 / num2).toFixed(4); //12345.6789
        numArray = (number).split("."); //sayıyı iki parçaya ayırıp diziye ekler
        // noktadan önce olan kısmı alıp terse döndürür
        strNumber0 = numArray[0].split("").reverse().join("");
        strNumber1 = ""
        for (let i = 0; i < strNumber0.length; i++) {
            if (i % 3 == 0 && i != 0) {
                strNumber1 = strNumber1 + ",";
                strNumber1 = strNumber1 + strNumber0[i];
            } else {
                strNumber1 = strNumber1 + strNumber0[i];
            }
        }
        return (strNumber1.split("").reverse().join("")) + "." + numArray[1];
    } else {
        return (0).toFixed(4); //infinity hatası önleme
    }
}

// keep this function call here 
console.log(FormattedDivision(readline()));


