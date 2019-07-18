var temp;
var result ='';
function cariMedian(arr) {
  var i = 0;
  var result ='';

  if(arr.length %2 === 0) {
    result += (((arr[(arr.length/2)-1]) + arr[(arr.length/2)])/2);
    
  } else {
    result+= arr[Math.ceil((arr.length/2)-1)];

  } return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7 ==================> harusnya 6? karena kalau di-sort 6 ada di tengah2 deret.
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5