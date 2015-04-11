var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(arrays) {
  return arrays.reduce(function(a, b) {
    return a.concat(b);
  });
}
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
