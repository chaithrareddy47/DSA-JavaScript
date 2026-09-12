// palindrome number

let n = 121;

function palindrome(n) {
    let temp = n;
    let reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10)
    }

    if (reverse === temp) {
        return true;
    } else {
        return false;
    }
   
    
}

let palindromeNumber = palindrome(n);
console.log(palindromeNumber);
