/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let countX = [];
  let countO = [];
  let countSpc = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      countO.push(i);
    } else if (arr[i] === 'x') {
      countX.push(i);
    }
  }
  if (countX.length === 0) {
    return 0;
  }
  let terdekat = arr.length;
  for (let i = 0; i < countO.length; i++) {
    for (let k = 0; k < countX.length; k++) {
      let result = Math.abs(countO[i] - countX[k]);
      if (result < terdekat) {
        terdekat = result;
      }
    }
  }
  return terdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
