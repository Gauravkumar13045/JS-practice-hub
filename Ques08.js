// 8. Write a function to reverse a number .


function reverseNum(num){
    let reverse = 0;
    while(num != 0){
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);

    }
    return reverse;
}

console.log(reverseNum(545)); 