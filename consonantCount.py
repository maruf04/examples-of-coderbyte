# Consonant Count
# Have the function ConsonantCount(str) take the str string parameter being passed and return the number of consonants the string contains.
# Examples
# Input: "Hello World"
# Output: 7
# Input: "Alphabets"
# Output: 6

def ConsonantCount(strParam):
    array = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
          "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    count=0
    for i in strParam:
        if i.lower() in array:
            count=count+1
    return count

# keep this function call here 
print(ConsonantCount("Alphabets"))
