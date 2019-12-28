function makeNumber(nums){

    let numArr = '';

    for (let i = 0; i < nums.length; i++){      
        if(Number.isInteger(parseInt(nums[i]))){
            numArr += nums[i];
        } 
    }

    return numArr;
}

function countNumbers(nums){
    let x = makeNumber(nums);
    let result = '';

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 0){
                sum++;
            }
        }
        if (sum > 0){
            result += '"0":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 1){
                sum++;
            }
        }
        if (sum > 0){
            result += '"1":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 2){
                sum++;
            }
        }
        if (sum > 0){
            result += '"2":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 3){
                sum++;
            }
        }
        if (sum > 0){
            result += '"3":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 4){
                sum++;
            }
        }
        if (sum > 0){
            result += '"4":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 5){
                sum++;
            }
        }
        if (sum > 0){
            result += '"5":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 6){
                sum++;
            }
        }
        if (sum > 0){
            result += '"6":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 7){
                sum++;
            }
        }
        if (sum > 0){
            result += '"7":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 8){
                sum++;
            }
        }
        if (sum > 0){
            result += '"8":' + sum + ', ';
        }
    }

    {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            if (parseInt(x[i]) === 9){
                sum++;
            }
        }
        if (sum > 0){
            result += '"9":' + sum;
        }
    }

    return result;
}

alert(countNumbers('8e76a8gh1fih9h3ob i39oi4t'));