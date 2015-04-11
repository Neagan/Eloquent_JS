function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
var centuries = {};
ancestry.forEach(function(person) {
  var cent = Math.ceil(person.died / 100);
  if (!centuries[cent]) {
    centuries[cent] = [];
  }
  centuries[cent].push(person.died - person.born);
});

for (var cent in centuries) {
  console.log(cent + ': ' + average(centuries[cent]).toFixed(1));
}

console.log('\n') // Separate output

// Bonus groupBy function
function groupBy(array, func) {
  return array.map(func).reduce(function(obj, year) {
    if (!obj[year[0]]) {
      obj[year[0]] = [];
    }
    obj[year[0]].push(year[1]);
    return obj;
  }, {});
}

function deathCent(person) {
  // Stores group as well as age
  return [Math.ceil(person.died / 100), person.died - person.born];
}

var group = groupBy(ancestry, deathCent);
for (var cent in group) {
  console.log(cent + ': ' + average(group[cent]).toFixed(1));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
