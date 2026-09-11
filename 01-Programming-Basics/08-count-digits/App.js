// * COUNT DIGITS

let n = 2356789;

let rem;
let count = 0;

function countDigits(num) {
    while (num > 0) {
        rem = num % 10;
        count++;
        num = Math.floor(num / 10);
        
    }
    return count;
    
}

let countDigit = countDigits(n);
console.log(countDigit);


