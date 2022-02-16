//  Fibonacci Checker
//  Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
//  Examples
//  Input: 34
//  Output: yes
//  Input: 54
//  Output: no

//10 puan alındı tam puan
//medium

var array = [];

function fibo(num) {
    var n1 = 0;
    var n2 = 1;
    var n3 = 0;
    while (num > n3) {
        n3 = n1 + n2;
        array.push(n3);
        n1 = n2;
        n2 = n3;
    }
}

function FibonacciChecker(num) {
    fibo(num);
    if (array.find(element => element == num)) {
        return "yes";
    } else
        return "no";
}

// keep this function call here 
console.log(FibonacciChecker(readline()));