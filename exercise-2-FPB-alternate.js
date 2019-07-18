
function angkaBagi(angka) {
    var result  = [];
    var temp = ''
    for ( var i = 1; i < 10; i ++) {
        if(angka%i === 0) {
            result.push(angka/i);
            result.push(i);
        }
    }
    var i = 0;
    while ( i < result.length) {
        if(result[i] > result [i+1]) {
            temp = result[i];
            result[i] = result[i+1];
            result[i+1] = temp;
            i = 0;
        } else {
            i++;
        }
    } return result;
}

function fpb(angka1, angka2) {
    var faktor1 = angkaBagi(angka1);
    var faktor2 = angkaBagi(angka2);
    var result = [];
    for (var i = 0; i < faktor1.length; i ++) {
         for( var j = 0; j< faktor2.length; j ++) {
            if(faktor1[i] === faktor2[j]) {
                 result.push(faktor2[j]);
            }
        }
    } return result[result.length-1];  
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1