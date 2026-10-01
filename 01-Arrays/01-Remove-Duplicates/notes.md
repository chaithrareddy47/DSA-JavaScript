# Remove Duplicates from Sorted Array

## Problem
Given a sorted array, remove duplicates in-place so that
each unique element appears only once.

Return the number of unique elements `k`.

Example:
[0,0,1,1,1,2,2,3,3,4]
→ [0,1,2,3,4,_,_,_,_,_]

k = 5

---

## Important Conditions

- Array is sorted.
- Duplicates are next to each other.
- Must modify the original array.
- Cannot use an extra array.
- Only the first `k` elements matter.

---

## Pattern: Two Pointers

Two pointers = using two variables to track positions
in the array.

### i → Scanner
- Moves through the entire array.
- Checks each element.

### x → Unique Pointer
- Points to the position of the last unique element.
- Starts at `0`.

---

## Main Logic

Compare:

arr[i] with arr[x]

### If duplicate:
arr[i] === arr[x]

→ Do nothing  
→ i continues moving  
→ x stays

### If new unique:
arr[i] > arr[x]

→ x moves forward  
→ Copy the new value:

arr[x] = arr[i]

So:

Duplicate:
i → moves
x → stays

New unique:
i → moves
x → moves
arr[x] = arr[i]

---

## Why Does `arr[i] > arr[x]` Work?

The array is sorted.

Therefore, a new value will always be greater
than the previous unique value.

Example:

[0,0,1,1,2,2,3]

0 → duplicate
1 → new unique
2 → new unique
3 → new unique

---

## Why `x + 1`?

`x` represents an INDEX, not the count.

If:

x = 4

then the unique elements are at:

index:  0 1 2 3 4
value:  0 1 2 3 4

Number of unique elements = 5.

Therefore:

return x + 1

---

## Algorithm

1. Set x = 0.
2. Let i scan from 0 to arr.length - 1.
3. Compare arr[i] and arr[x].
4. If arr[i] > arr[x]:
   - increment x
   - put arr[i] at arr[x]
5. Return x + 1.

---

## Code

function duplicates(arr) {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }

    return x + 1;
}

---

## Dry Run

arr = [0,0,1,1,2,2,3]

x = 0

i=0 → 0 > 0 ❌ → duplicate → x stays
i=1 → 0 > 0 ❌ → duplicate → x stays
i=2 → 1 > 0 ✅ → x=1 → arr[1]=1
i=3 → 1 > 1 ❌ → duplicate → x stays
i=4 → 2 > 1 ✅ → x=2 → arr[2]=2
i=5 → 2 > 2 ❌ → duplicate
i=6 → 3 > 2 ✅ → x=3 → arr[3]=3

First 4 elements:
[0,1,2,3]

k = x + 1 = 4

---

## My Aha / Learning

- `i` scans the array.
- `x` maintains the unique portion.
- Duplicate → x stays.
- New value → x moves.
- `arr[x] = arr[i]` places the new unique value.
- `x` is an index, so return `x + 1`.
- Sorted array makes this approach possible.

## Memory Hook

i scans → x maintains unique

Duplicate → x stays

New unique → x moves + copy

Return → x + 1

echo "# DSA-JavaScript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chaithrareddy47/DSA-JavaScript.git
git push -u origin main