// 9. Write a function to reverse an array without using .reverse().

function reversearray(arr) {

    return arr.reduce((acc, curr) => [curr, ...acc], []);

}

console.log(reversearray([1, 2, 3, 4, 5])); 