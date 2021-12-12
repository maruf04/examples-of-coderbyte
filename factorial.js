function factorial(number) {
    if (number == 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}


function main() {
    const n = +(readLine());

    console.log(factorial(n));
}