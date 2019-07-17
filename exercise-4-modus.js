/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
Function akan me-return modus dari array atau deret angka tersebut.
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan).
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  var result = [];
  for ( var i = 0; i < arr.length; i ++) {
    var count = 0;
    for ( var j = 0; j < arr.length; j ++) {
      if ( arr[i] === arr[j]) {
        count ++;
      }
    } 
    result.push([arr[i]]);
    result[i].push(count);    
  }
  var temp = '';
  var i = 0;
  while ( i < result.length-1 ){
    if (result[i][1] < result[i+1][1]) {
      temp = result[i];
      result[i] = result[i+1];
      result[i+1] = temp;
      i = 0;
    } else {
      i++;
    }
  }
  for(var i = 0; i < result.length; i++) {
    if(result[i][1] === 1 || result[i][1] === result.length) {
      return -1;
    } else {
      return result[i][0];
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1