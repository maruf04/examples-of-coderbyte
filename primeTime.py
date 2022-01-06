# Prime Time
# Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
# Examples
# Input: 19
# Output: true
# Input: 110
# Output: false


def PrimeTime(num):
    if (num > 1 and num <= pow(2, 16)):
        for x in range(2,num):
            if(num%x==0):
                return False
    return True

# keep this function call here 
print(PrimeTime(110))
