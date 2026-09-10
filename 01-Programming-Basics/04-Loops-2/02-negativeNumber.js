let arr = [2, -9, 17, 0, 1, -10, -4, 8]

function negativeNumber() {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) { 
            console.log(arr[i]);
            
            
        }
    }
}

let negNum = negativeNumber();
console.log(negNum);


/*
=====================================

Problem:
Print Negative Numbers

Approach:
1. Loop through the array.
2. Get current value using arr[i].
3. Check if arr[i] < 0.
4. If true, print the value.

Learned:
✔ i = index
✔ arr[i] = current value
✔ Negative numbers are always less than 0
✔ Loop is used to visit every element

Time Complexity:
O(n)

return
↓

Returns a value

Stops the function immediately

------------------------

console.log()
↓

Prints the value

Does NOT stop the function
=====================================
*/