/*
Given a roman numeral s, convert it to an integer.

Roman numerals are denoted by a combination of some symbols.

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Example 1
s: “X”

Result: 10

Example 2
s: “VI”

Result: 6

Example 3
s: “XII”

Result: 12
*/

let num = "XII";

console.log(romanNum("MCMIV"));

function value(s) {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      break;
  }
}

function romanNum(num) {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    let s1 = value(num[i]);
    //   int s2 = value(str.charAt(i + 1));
    if (i + 1 < num.length) {
      let s2 = value(num[i + 1]);
      // Comparing both values
      if (s1 >= s2) {
        // Value of current symbol
        // is greater or equalto
        // the next symbol
        result += +s1;
      } else {
        // Value of current symbol is
        // less than the next symbol
        result = result + s2 - s1;
        i++;
      }
    } else {
      result = result + s1;
    }
  }
  return result;
}

/*
Complexity Analysis: 

Time Complexity: O(n), where n is the length of the string. 
Only one traversal of the string is required.
Space Complexity: O(1). 
As no extra space is required.
*/
