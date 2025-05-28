// 9. Write a function to determine if a number is prime.


function isPrime(num){
 let isprime = true;

    if(num <= 1){
        isprime = false;
    }else if(num === 2){
        isprime = true;
    }else if( num % 2 === 0){
        isprime = false;
    }else{
        for(let i = 3; i <= Math.sqrt(num); i += 2){
            if(num % i === 0){
                isprime = false;
                break;
            };
        }
    }
   console.log(`${num} is ${isprime ? "a prime" : "not a prime"} number.`);
    return isprime;

}

let num = 229;
isPrime(num); 