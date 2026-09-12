# 🔥 Palindrome Number

## 1. What is a Palindrome?

A number is a palindrome if it reads the same **forward and backward**.

Examples:

```text
121  → 121 ✅
1221 → 1221 ✅
123  → 321 ❌
```

### Main idea:

**Reverse the number and compare it with the original number.**

---

## 2. Which Pattern Does It Use? 🧩

### Digit Processing Pattern

Palindrome uses the **same digit-processing pattern** as Count Digits.

```text
Take last digit
      ↓
Process the digit
      ↓
Remove last digit
      ↓
Repeat
```

### Count Digits:

```text
Take digit
   ↓
count++
   ↓
remove digit
```

### Palindrome:

```text
Take digit
   ↓
build reverse
   ↓
remove digit
```

So Palindrome is:

**Digit Processing + Reverse + Comparison**

---

## 3. Important Variables 🧠

```text
original → preserve the starting number
copyNum  → working number; gets changed
digit    → current last digit
reverse  → builds the reversed number
```

### Why do we need `copyNum`?

We must keep `original` unchanged because we need it at the end for comparison.

```text
original = 121  ← stays 121

copyNum = 121
          ↓
          12
          ↓
          1
          ↓
          0
```

At the end:

```text
original === reverse
```

---

## 4. Important Operations 🔑

### Get last digit

```js
digit = copyNum % 10;
```

Example:

```text
123 % 10 = 3
```

`% 10` gives the last digit.

---

### Remove last digit

```js
copyNum = Math.floor(copyNum / 10);
```

Example:

```text
123 → 12
12  → 1
1   → 0
```

---

### Build the reverse ⭐

```js
reverse = reverse * 10 + digit;
```

Why `* 10`?

Suppose:

```text
reverse = 3
digit = 2
```

If we do:

```text
3 + 2 = 5 ❌
```

We need `32`.

So:

```text
3 × 10 = 30
30 + 2 = 32
```

Therefore:

```text
reverse = reverse * 10 + digit;
```

This moves the existing digits one place left and adds the new digit.

---

## 5. Dry Run 🔍

Input:

```text
121
```

Initial:

```text
original = 121
copyNum = 121
reverse = 0
```

| copyNum | digit | reverse |
| ------: | ----: | ------: |
|     121 |     1 |       1 |
|      12 |     2 |      12 |
|       1 |     1 |     121 |
|       0 |  stop |     121 |

Finally:

```text
original = 121
reverse = 121
```

```text
original === reverse
```

✅ Palindrome

---

## 6. Algorithm in Words 🗣️

1. Store the original number.
2. Make a copy of the number.
3. Start `reverse = 0`.
4. While the copy is greater than 0:

   * get the last digit using `% 10`
   * add it to `reverse`
   * remove the last digit using `Math.floor(/10)`
5. Compare `original` and `reverse`.
6. If they are equal → palindrome.
7. Otherwise → not palindrome.

---

## 7. My Important Aha Moments 💡

### Aha 1

`original` must stay unchanged.

`copyNum` is used for processing.

### Aha 2

`% 10` only gets the last digit. It does not change the number.

### Aha 3

`Math.floor(num / 10)` removes the last digit.

### Aha 4

`reverse * 10` creates space for the next digit.

### Aha 5

The comparison must happen **after the loop**, because only then is the complete reverse ready.

---

## 8. Pattern to Remember 🧩

For number digit problems:

```text
number
   ↓
% 10
   ↓
get last digit
   ↓
process digit
   ↓
Math.floor(number / 10)
   ↓
remove last digit
   ↓
repeat
```

The thing that changes is **what we do with the digit**.

```text
Count Digits → count++

Reverse      → reverse = reverse * 10 + digit

Palindrome   → reverse + comparison
```

### ⭐ Main takeaway

Don't memorize the Palindrome code.

Remember:

> **"Reverse the number using digit processing, then compare the reverse with the protected original."**
