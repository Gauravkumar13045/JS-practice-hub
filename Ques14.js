// 14. Create a function that returns the Fibonacci sequence up to n terms.

function fabo(num){

let fab1 = 0;
let fab2 = 1;

let array = [fab1, fab2]
for(let i = 2; i < num; i++){
    let result = fab1 + fab2;
    array.push(result);
    fab1 = fab2;
    fab2 = result;

}
 return array;
}

console.log(fabo(10));