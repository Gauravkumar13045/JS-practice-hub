// 35. Write a function that flattens a nested array.

function flattensArray (arr){

    let result = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            result = result.concat(flattensArray(element));
        }else{
            result.push(element);
        }
    });
    return result;
}

console.log(flattensArray([1,[2,3,[4,5,[6]]]]));