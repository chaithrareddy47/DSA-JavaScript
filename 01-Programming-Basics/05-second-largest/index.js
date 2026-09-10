// second largest 

let arr = [8, 19, 0, 22, 8, 7, 1]


function secondLargest() {
    let largest = 0;
    let secondLargest;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
            
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;

}

let secondLargestNum = secondLargest();
console.log(secondLargestNum);
