/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();
  let group = [];
  for (let i = 0; i < animals.length; i++) {
    let found = false;
    for (let j = 0; j < group.length; j++) {
      if (animals[i][0] === group[j][0][0]) {
        group[j].push(animals[i]);
        found = true;
      }
    }
    if (!found) {
    group.push([animals[i]]);
  }
 }
  return group
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
