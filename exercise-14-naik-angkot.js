function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var display = [];
  for ( var i = 0; i < arrPenumpang.length; i ++) {
    var result = {};
    result['penumpang'] = arrPenumpang[i][0];
    result['naikDari'] = arrPenumpang[i][1];
    result['tujuan'] = arrPenumpang[i][2];
    result['bayar'] = ((rute.indexOf(arrPenumpang[i][2]))-(rute.indexOf(arrPenumpang[i][1])))*2000;
    display.push(result);
  }
  return display;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]