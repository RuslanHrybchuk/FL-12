const $30 = 30, $10 = 10, $1 = 1, $2 = 2, $3 = 3, $5 = 5, $7 = 7, $8 = 8,
$14 = 14, $31 = 31, $29 = 29, $48 = 48, $58 = 58, $365 = 365, $2019 = 2019;

function convert(...args){
    for(let i = 0; i < args.length; i++){

        if(typeof args[i] === 'number'){
            toString(args[i]);
        } else if (typeof args[i] === 'string'){
            parseInt(args[i]);
        } else {
            continue;
        }
    } return args;
}

function executeforEach(mass, func){
    for(let i = 0; i < mass.length; i++){
        func(mass[i]);
    }
}

function mapArray(arr, callback){

    let mass = [];
    executeforEach(arr, function(el) {
        mass.push(callback(parseInt(el)));
    });
    
    return mass;
}

function filterArray(arr, callback){

    let mass = [];
    let filteredArr = [];

    executeforEach(arr, function(el) {
        mass.push(callback(parseInt(el)));
    });

    for (let i = 0; i < arr.length; i++){
        if(mass[i] === true){
            filteredArr.push(arr[i]);
        }
    } return filteredArr;
}

function flipOver(str){
    let result = '';
    for(let i = str.length-1; i >= 0; i--) {
        result = result + str[i];
    } return result;
}

function makeListFromRange(range){
    let list = [];
    for(let i = 0; i <= range[1] - range[0]; i++ ){
        list[i] = range[0] + i;
    } return list;
}

const actors = [
    { 
      name: 'tommy',
      age: 36
    },
    { 
      name: 'lee', 
      age: 28 
    }
];

function getArrayOfKeys(obj, value){
    let mass = [];
    executeforEach(obj, function(el){
        mass.push(el[value]);
    });
    return mass;
}

function substitute(nums){
    return mapArray(nums, function(el){
        if(el < $30) {
          return '*';
        } return el; 
    });
}

function getPastDay(date, days){
    const dayMs = 86400000;
    return new Date(date - days*dayMs).getDay;
}

function formatDate(date){

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    function getHours(){
        if (date.getHours() < $10){
            return '0'+ date.getHours();
        } else {
            return date.getHours();
        }
    }

    function getMinutes(){
        if (date.getMinutes() < $10){
            return '0'+ date.getMinutes();
        } else {
            return date.getMinutes();
        }
    } return `${year}/${month}/${day} ${getHours()}:${getMinutes()}`;
}



alert(convert('1', $2, $3, '4')); // [1, '2', '3', 4]

executeforEach([$1,$2,$3], function(el) {
    console.log(el * $2)
}) // logs 2 4 6

alert(mapArray([$2, '5', $8], function(el) {
    return el + $3
})) // returns [5, 8, 11]

alert(filterArray([$2, $5, $8], function(el) { 
    return el % $2 === 0 
})) // returns [2, 8]

alert(flipOver('hey world')); // 'dlrow yeh'

alert(makeListFromRange([$2, $7])) // [2, 3, 4, 5, 6, 7]

alert(getArrayOfKeys(actors, 'name')); // [‘tommy’, ‘lee’]

alert(substitute([$58, $14, $48, $2, $31, $29])); // [58, '*', 48, '*', 31, '*']

const date = new Date($2019, 0, $2);
getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, $2); // 31, (31 Dec 2018)
getPastDay(date, $365); // 2, (2 Jan 2018)

alert(formatDate(new Date('6/15/2018 09:15:00'))); // "2018/6/15 09:15"
alert(formatDate(new Date())); // "2020/1/7 12:56" // gets current local time
