// 18. Write a function to check whether a character is a vowel or consonant.

function checkchar(cha){

    if(["a", "e", "i", "o", "u"].includes(cha.toLowerCase())){
        console.log(`${cha} is a vowel`);
    }else{
        console.log(`${cha} is a consonant`);

    }
}

checkchar("a");
checkchar("g");

