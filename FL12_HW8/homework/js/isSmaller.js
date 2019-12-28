function isBigger(a,b) {
    return a > b;
}

function isSmaller(a,b) {
    if (isBigger(a,b) === true){
        return false;
    } else {
        return true;
    } 
}

alert(isSmaller(1, 3));