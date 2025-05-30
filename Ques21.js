// 21. Write a program to calculate the sum of digits of a number.

let a = 45;
let sum = 0;
while( a > 0){
    let digit = a % 10;
     sum = sum + digit;
     a = Math.floor(a / 10);
}

console.log(`${sum}`);
