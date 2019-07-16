var alfabet = 'abcdefghijklmnopqrstuvwxyz';

function ubahHuruf(kata) {
    var result = '';
    var match = 0;
    for(var i = 0; i < kata.length; i ++) {
        match = alfabet.indexOf(kata[i]);
        match += 1;
        result += alfabet[match];
    } return result;
}

console.log(ubahHuruf('wow'));
console.log(ubahHuruf('developer'));
console.log(ubahHuruf('javascript'));
console.log(ubahHuruf('keren'));
console.log(ubahHuruf('semangat'));