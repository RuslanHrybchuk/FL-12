  function isLeapYear(getDate){

    let ins = new Date(getDate);
    let yearNum = ins.getFullYear();

    let result;

    
    if(!yearNum){
      result = 'Invalid Date';
    }else{

      if(yearNum % 400 === 0){

        result = `${yearNum} is a leap year`;

      }else if(yearNum % 100 === 0){

        result = `${yearNum} is not a leap year`;

      }else if(yearNum % 4 === 0){

        result = `${yearNum} is a leap year`;
        
      }else{

        result = `${yearNum} is not a leap year`;

      }
    }
    return result;
  }


alert(isLeapYear('2020-01-01 00:00:00')); // =>  ‘2020 is a leap year’
alert(isLeapYear('2020-01-01 00:00:00777')); // =>  ‘Invalid Date’
alert(isLeapYear('2021-01-15 13:00:00')); // =>  ‘2021 is not a leap year’
alert(isLeapYear('2200-01-15 13:00:00')); // =>  ‘2200 is not a leap year’
alert(isLeapYear(1213131313135465656654564646542132132131)); // =>  ‘Invalid Date’
alert(isLeapYear(1213131313)); // => ‘1970 is not a leap year’  
