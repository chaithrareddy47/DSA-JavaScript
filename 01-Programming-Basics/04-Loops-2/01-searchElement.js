let arr = [4, 2, 0, 18, 8, 30]

function searchElement(x) {
    for (let i = 0; i < arr.length; i++){
        if (x === arr[i]) {
            console.log(`element found at index ${i}`);
            return
            
        }
    }
    return -1;
}

let searchEle = searchElement(10);
console.log(searchEle);

/*
======================================
NOTES

Problem:
Search an element in an array. return index if element is found or return -1 if not found

Approach:
1. Loop through every element.
2. Compare target with arr[i].
3. If equal, print index.
4. Stop using return.

Learned:
- i = index
- arr[i] = value
- Compare values using arr[i]
- Print i because the question asks for the index

Time Complexity:
O(n)

======================================
*/