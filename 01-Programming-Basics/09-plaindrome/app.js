

let n = 121;
let rev = 0;
let nCopt = n;
while (n > 0) {
    let rem  = n % 10;
    rev = (10 * rev) + rem;
    n = Math.floor(n / 10);   
}
if (rev === nCopt) {
    console.log("its plaindrome");
    
} else {
    console.log("no");
    
}


