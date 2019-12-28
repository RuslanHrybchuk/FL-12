function addOne(x) {
    return x + 1;
}
  
function pipe(x, ...func) {

    let result = x;

    for(let i = 0; i < func.length; i++){
        result = func[i](result);
    }

    return result;
}

alert(pipe(1, addOne, addOne, addOne, addOne));
  