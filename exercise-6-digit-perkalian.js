
function digitPerkalianMinimum(angka) {
  var result  = [];
  for ( var i = 1; i <= angka; i ++) {
    if(angka%i === 0) {
        result.push(angka/i);
        result.push(i);        
    }
  }
  var i = 0;
  var count = (((String(result[i])).length)+((String(result[i+1])).length));
  while ( i < result.length-3) {
      if ( count > (((String(result[i+2])).length)+((String(result[i+3])).length))  ) {
        count = (((String(result[i+2])).length)+((String(result[i+3])).length));
        i += 2;
    } else {
        i += 2;
    }
  } return count;
}
  
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(999 * 999)); // 6
