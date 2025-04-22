function pasanganTerbesar(num) {
  let rillNumb = num.toString().split('');
  let number = [];
  for (let i = 0; i < rillNumb.length - 1; i++) {
    number.push(parseInt(rillNumb[i] + rillNumb[i + 1]));
  }
  
  let higher = number[0];
  for (let i = 0; i < number.length; i++) {
    if (higher < number[i]) {
      higher = number[i]
    }
  }
  return higher
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
