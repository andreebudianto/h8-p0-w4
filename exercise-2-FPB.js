// FPB dengan Euclid Algorithm
var sisa = '';
var temp = '';
function fpb(angka1, angka2) {
  if (angka1 > angka2) {
    temp = angka1;
    angka1 = angka2;
    angka2 = temp;
  }
  else if(angka2 > angka1) {
    sisa = angka2%angka1;
    while (sisa !== 0) {
      angka2 = angka1;
      angka1 = sisa;
      sisa = angka2%angka1;
    } 
  } return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1