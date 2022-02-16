#  Happy Numbers
#  Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

#  For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.
#  Examples
#  Input: 1
#  Output: true
#  Input: 101
#  Output: false

# 5 puan alındı bundan big-O ile ilgili bir şeyler eksik var


def HappyNumbers(num):
    sum = 0
    x = [int(a) for a in str(num)]
    for i in x:
        sum += pow(i, 2)
        if(sum > 1):
            return False
    return True


# keep this function call here
print(HappyNumbers(100))
print(HappyNumbers(1520))
