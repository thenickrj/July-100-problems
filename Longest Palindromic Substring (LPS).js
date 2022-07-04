/*
Given a string, return the longest palindromic substring (LPS) in it.

Note: There can be multiple palindromic substrings with the max length. In case of conflict, return the substring that has the smallest starting index.
*/
let s = "abaadcd";

console.log(longPalin(s));

function isPal(string, i) {
  let left = string[i - 1],
    right = string[i + 1];
  let count = 1;
  let pal = string[i];
  while (left && right) {
    if (left == right) {
      pal = left + pal + right;
    }
    count++;
    left = string[i - count];
    right = string[i + count];
  }

  return pal;
}

function longPalin(s) {
  let max_length = 0;
  let max_Pal = "";
  for (let i = 0; i < s.length; i++) {
    let pal = isPal(s, i);
    if (pal.length > max_length) {
      max_Pal = pal;
      max_length = max_Pal.length;
    }
  }
  return max_Pal;
}
