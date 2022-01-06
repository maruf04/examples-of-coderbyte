function PrimeTime(num) {
    if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }

    // code goes here  
    return true;

}

// keep this function call here 
console.log(PrimeTime(readline()));