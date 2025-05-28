// 10. Write a function that returns the sum of all numbers from 1 to n.

function sumToN(n) {

    let sum = 0;
    if (n < 1) {
        console.log("number is less than 1");
        return 0;
    } else 
         {
          for (let i = 1; i <= n; i++) {
            sum += i;
            
        }
     }
     console.log(`Sum of numbers from 1 to ${n} is: ${sum}`);

     return sum;
 
} 
sumToN(5);