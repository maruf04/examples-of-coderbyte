# Fibonacci Checker
# Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
# Examples
# Input: 34
# Output: yes
# Input: 54
# Output: no

# bundan 10 puan alındı tam puan
# medium

array = []


def fibo(n):
    n1 = 0
    n2 = 1
    n3 = 0
    while(n > n3):
        n3 = n1+n2
        array.append(n3)
        n1 = n2
        n2 = n3


def fibonacciChecker(num):
    fibo(num)
    if num in array:
        return "yes"
    else:
        return "no"


# print(array)
fibonacciChecker(12)
