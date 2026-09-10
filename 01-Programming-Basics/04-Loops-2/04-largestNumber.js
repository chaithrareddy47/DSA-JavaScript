let arr = [5, 7, 0, 100, 8, 17, 1]

function largestNumber() {
    let largest = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
     
        }
    }
    return largest;
}

let largestNum = largestNumber();
console.log(largestNum);
