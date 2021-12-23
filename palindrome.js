function Palindrome(str) {
    first=str.replace(/\s/g, '')
    second=str.replace(/\s/g, '').split("").reverse().join("");
    // code goes here  
    return (first===second); 
  
  }
     
  // keep this function call here 
  console.log(Palindrome(readline()));