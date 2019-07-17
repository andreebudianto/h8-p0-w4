/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
Contohnya, halo akan menjadi ahlo.
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/
function urutkanAbjad(str) {
  var ubahArr = [];
  for ( var i = 0; i < str.length;i ++) {
    ubahArr.push(str[i]);
  }
  var j = 0;
  var temp = '';
  while ( j < ubahArr.length) {
    if (ubahArr[j] > ubahArr[j+1]) {
      temp = ubahArr[j];
      ubahArr[j] = ubahArr[j+1];
      ubahArr[j+1] = temp;
      j = 0;
    } else {
      j++;
    }
  }
  var result = '';
  for ( var k = 0; k < ubahArr.length; k ++) {
    result += ubahArr[k];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'