// 17. Write a program to count the number of vowels in a string.

function countVowels(words){

    let counter = 0;
    let array = [];
    let check = words.split("");
        array.push(...check);

    for(let i = 0; i < array.length; i++){

        if(array[i] === "a" || array[i] === "e" || array[i] === "i" ||array[i] === "o" || array[i] === "u" ){
          counter++;
        }
    }
return counter;
}

console.log(countVowels("Copilot is amazing!"));