// Expected Result = 7
// Direction : Find median of this array

const input = [8, 7, 7, 9, 5, 4, 2, 9, 9];

function result(input) {
  arr = input.sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  }
}

console.log(result(input));
