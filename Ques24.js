// 24. Write a function that takes a number and returns true if it’s divisible by both 3 and 5.

function divisible(num){

    if(num % 3 === 0 && num % 5 === 0){

       return true;
    }else{
        return false;

    }
    
    
}
divisible(15);