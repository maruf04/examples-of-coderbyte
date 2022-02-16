// Happy Numbers
// Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

// For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.
// Examples
// Input: 1
// Output: true
// Input: 101
// Output: false

//5 puan alındı bundan

import java.util.*;
import java.io.*;
import java.lang.Math;

class Main
{

    public static boolean HappyNumbers(int num)
    {

        int sum = 0;
        int rem = 1;
        while (num > 0)
        {
            rem = num % 10;
            sum = sum + (rem * rem);
            num = num / 10;
        }
        if (sum > 1)
            return false;
        else
            return true;
    }

    public static void main(String[] args)
    {
        // keep this function call here
        Scanner s = new Scanner(System.in);
        System.out.print(HappyNumbers(s.nextLine()));
    }

}