// Given a string s, find the length of the longest substring without repeating characters.

/*
s: “mississippi”
Result: 3
Explanation: Longest vaild substrings are “mis” and “sip”, both of length 3.
*/

let s = "mississippi";
let s2 = "workattech";
// console.log(substring(s));
console.log(substring(s2));

function substring(s) {
  let sub_string = "";
  let MAX_LENGTH = 0;
  for (let i of s) {
    if (sub_string.includes(i)) {
      sub_string = "";
    } else {
      sub_string = sub_string + i;
      if (sub_string.length > MAX_LENGTH) {
        MAX_LENGTH = sub_string.length;
      }
    }
  }
  return MAX_LENGTH;
}
