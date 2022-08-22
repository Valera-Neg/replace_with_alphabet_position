/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/


function alphabetPosition(text) {
    let res = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const textArr = text.toLowerCase().replace(/[^a-z]/g, '').split("")
  for( i = 0; i < textArr.length; i++) {  
    for (j = 0; j < alphabet.length; j++) {
      if (textArr[i] === alphabet[j]) {
        res.push(j + 1)
        break;
      }    
    }    
  }
  return res.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) 
//> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log("#######################################################")

console.log(alphabetPosition("The narwhal bacons at midnight."))
//> "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"