// 20. Write a program that checks if a number is a palindrome.

let number = 454;
let array = number.toString().split("");
let reversedArray = [...array].reverse();


if(array.join("") === reversedArray.join("")){
    console.log(`${number} is a palindrome number`);
}else{
    console.log(`${number} is not a palindrome number`);
}
