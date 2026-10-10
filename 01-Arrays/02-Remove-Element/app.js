
let arr = [4,2,4,6]

function removeElement(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++){

        if (arr[i] !== val) {
            arr[x] = arr[i]
            x++;
            
        }
    }
    return x;
}

const removeEle = removeElement(arr, 4)
console.log(removeEle);
console.log(arr);

