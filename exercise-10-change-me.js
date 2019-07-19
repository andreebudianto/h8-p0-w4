function changeMe(arr) {
    
    var result = {};
    for ( var i = 0; i < arr.length; i ++) {
        result['firstName'] = arr[i][0];
        result['lastName'] = arr[i][1];
        result['gender'] = arr[i][2];
        if( arr[i][3] < 2019) {
            result['age'] = 2019 - arr[i][3];
        } else {
            result['age'] = 'Invalid Birth Year';
        }
        console.log((i+1) + '. ' + result.firstName +' '+ result.lastName);
        console.log(result);
        
    } 

}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""