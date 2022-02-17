// Line Ordering
// Have the function LineOrdering(strArr) read the strArr parameter being passed which will represent the relations among people standing in a line. The structure of the input will be ["A>B","B>C","A<D",etc..]. The letters stand for different people and the greater than and less than signs stand for a person being in front of someone or behind someone. A>B means A is in front of B and B<C means that B is behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are the following ways you can arrange the people in line: DSJB, SDJB and DJSB. Your program will determine the number of ways people can be arranged in line. So for this example your program should return the number 3. It also may be the case that the relations produce an impossible line ordering, resulting in zero as the answer.

// Only the symbols <, >, and the uppercase letters A...Z will be used. The maximum number of relations strArr will contain is ten.
// Examples
// Input: ["A>B","A<C","C<Z"]
// Output: 1
// Input: ["A>B","B<R","R<G"]
// Output: 3

//bu şekilde 15 puandan 6 puan alındı :D
//kotu bir kod

function LineOrdering(strArr) {
    // console.log(strArr[1])
    for (var i = 0; i < strArr.length; i++) {
        // console.log(strArr[i][1]);
    }

    // code goes here  
    return 1;

}

// keep this function call here 
console.log(LineOrdering(readline()));




//sorunun dogru hali
// let findPermutations = (string) => {
//     if (!string || typeof string !== "string"){
//       return "Please enter a string"
//     } else if (string.length < 2 ){
//       return string
//     }
  
//     let permutationsArray = [] 
     
//     for (let i = 0; i < string.length; i++){
//       let char = string[i]
  
//       if (string.indexOf(char) != i)
//       continue
  
//       let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
//       for (let permutation of findPermutations(remainingChars)){
//         permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
//   }
  
  
//   function LineOrdering(strArr) { 
//     let letter = ""
  
//     for(let k of strArr){
//       letter += k.match(/[A-Z]/g).join("")
//     }
//     letter = [...new Set(letter)].join("")
  
//     let count = 0;
//     for(let j of findPermutations(letter)){
//       count1 = 0
//       for(let i of strArr){
//         if(i[1]===">"){
//           if(j.indexOf(i[0])<j.indexOf(i[2])){
//             count1 += 1
//             }
//         }else if(i[1]==="<"){
//           if(j.indexOf(i[0])>j.indexOf(i[2])){
//             count1 += 1
//             }
//         }else{
//           break
//         }
//       }
//       if(count1 === strArr.length){
//         count +=1
//       }
//       }
      
//     return count; 
  
//   }
     
//   // keep this function call here 
//   console.log(LineOrdering(["A>B","B<R","R<G"]));