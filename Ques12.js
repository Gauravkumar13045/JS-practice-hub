// 12. Write a program to find the GCD of two numbers.

function GCD(a, b) {
    if (b === 0) {
        return a;
    }
    return GCD(b, a % b);
}

console.log(GCD(12, 24)); 
