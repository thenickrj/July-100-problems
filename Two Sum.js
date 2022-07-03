let arr = [1, 3, 3, 4];
let arr2 = [8, 2, 10, 4, 1, 3];
let arr3 = [2, 4, 2, 3, 2];

// console.log(sum(arr, 5));
// console.log(sum(arr2, 9));
console.log(sum(arr3, 7));

function sum(arr, target) {
  let values = {};
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(target - arr[i])) {
      return [i, arr.indexOf(target - arr[i])];
    }
  }
  //   for (let i of arr) {
  //     console.log(values);
  //     if (target - i in values) {
  //       return [i, target - i];
  //     } else {
  //       values[i] = target - i;
  //     }
  //   }
  return false;
}
