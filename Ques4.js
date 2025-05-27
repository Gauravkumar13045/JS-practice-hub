
// 4. Write a program to find the largest of three numbers.

let a = 10; 
let b = 255;
let c = 56;

let Num = [a, b, c];

if(a > b && a > c){
    console.log(`The largest number is: ${a}`);
}else if(b > a && b > c){
    console.log(`The largest number is: ${b}`); 
} else{
    console.log(`The largest number is: ${c}`);
}