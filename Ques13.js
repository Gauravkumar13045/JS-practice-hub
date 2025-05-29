// 13. Write a function to calculate the power of a number.

function PowerNum(a, b) {
    let power = 1;

    for (let i = 0; i < b; i++) {

        power *= a;

    }
    return power;
}

console.log(PowerNum(2, 4));
