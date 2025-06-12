// 28. Write a function that removes duplicate elements from an array.


function dupli(array) {
    let arrayfun = [];
    for (let i = 0; i < array.length; i++) {

        if (!arrayfun.includes(array[i])) {
            arrayfun.push(array[i]);
        }
    }
    return arrayfun;

}

console.log(dupli([1, 2, 3, 4, 4, 4, 5, 5, 2, 3]));
