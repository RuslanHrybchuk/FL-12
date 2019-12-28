function getMin(...nums){

    let min = Infinity;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }
    }
    
    return min;
}

alert(getMin(4,11,45,7,25,0, 2, -35,-3,16));