var alfabet = 'abcdefghijklmnopqrstuvwxyz';
function ubahHuruf(kata) {
    // you can only write your code here!
    var result = '';
    for ( var i = 0; i < kata.length; i ++) {
        for ( var j = 0; j < alfabet.length; j ++) {
            if ( kata [i] === alfabet[j] && j !== alfabet.length-1 ) {
                result += alfabet[j+1];
            } else if ( kata [i] === alfabet[j] && j === alfabet.length-1 ) {
                result += alfabet[0];
            }
        }
    } return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu