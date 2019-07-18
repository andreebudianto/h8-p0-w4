
function angkaPrima(angka) {
    var count = 0; 
    for( var i = 2; i < angka; i ++) {
        // var i start dari 2, karena 1 dan 0 bukan angka prima
        if ( angka%i === 0) {
            count++;
        }
    } if ( count === 0) {
        return true;
    } else if (count > 0) {
        return false;
    }
}

//TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false