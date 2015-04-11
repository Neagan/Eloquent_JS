function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
function hasAge(age) {
  return age != undefined;
}

function momAgeDiff(person) {
  if (byName[byName[person.name].mother] != undefined) {
    return person.born - byName[byName[person.name].mother].born;
  }
}

console.log(average(ancestry.map(momAgeDiff).filter(hasAge)));
// → 31.2
