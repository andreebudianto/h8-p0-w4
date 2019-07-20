var sale = [['Sepatu Stacattu', 1500000], 
['Baju Zoro', 500000],
['Baju H&N', 250000],
['Sweater Uniklooh',175000],
['Casing Handphone',50000] ];

function listPurchased(money) {
    var sisa = money;
    var belanja = [];
    for( var i = 0; i < sale.length; i ++ ) {
        if ( sisa >= sale[i][1]) {
            sisa = sisa - sale[i][1];
            belanja.push(sale[i][0]);
        }
    }
    return belanja;
}

function changeMoney(money) {
    var sisa = money;
    var kembalian = 0;
    for( var i = 0; i < sale.length; i ++ ) {
        if ( sisa >= sale[i][1]) {
            sisa = sisa - sale[i][1];
        }
    } 
    kembalian = kembalian + sisa;
    return kembalian;
}

function shoppingTime(memberId, money) {
    var result = {};
    if (memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja.';
    
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup.' ;
    
    } else if (memberId.length > 1) {
        result['memberId'] = memberId;
        result['money'] = money;
        result['listPurchased'] = listPurchased(money);
        result['changeMoney'] = changeMoney(money);
    
    } 
    return result;
}
  
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja