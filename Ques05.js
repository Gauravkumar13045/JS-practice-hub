// 5. Create a function to return the factorial of a number.


function factorial(a){

    let factorialNum = a;
    for(let i = a - 1; i >= 1; i--){
        factorialNum *= i;
        
    }
    return factorialNum;
}


let n = 5;
console.log(`The factorial of the number is: ${factorial(n)}`);