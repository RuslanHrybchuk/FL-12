function makeNumber(nums){

    let numArr = '';

    for (let i = 0; i < nums.length; i++){      
        if(Number.isInteger(parseInt(nums[i]))){
            numArr += nums[i];
        } 
    }
    
    return numArr;
}

alert(makeNumber('8e76a8ghfih9h3ob i39oi4t'));