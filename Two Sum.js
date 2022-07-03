let arr = [1, 3, 3, 4];

console.log(sum(arr, 5));

function sum(arr, target) {
  let values = {};
  for (let i of arr) {
    console.log(values);
    if (target - i in values) {
      return [i, target - i];
    } else {
      values[i] = target - i;
    }
  }
  return false;
}
