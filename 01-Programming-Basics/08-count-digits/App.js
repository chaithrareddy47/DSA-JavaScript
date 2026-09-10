// count digits 
let digit = 0;


function countDigits(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++
    }
    return count;
    

}

let countNum = countDigits(digit)
console.log(countNum);

