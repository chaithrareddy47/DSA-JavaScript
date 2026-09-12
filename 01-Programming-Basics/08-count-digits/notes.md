# Count Digits

## 1. Problem

Given a number, find how many digits it contains.

Example:

```text
Input: 2356789
Output: 7
```

---

## 2. My Observation 💡

I noticed that I can remove **one digit at a time** from the number.

```text
2356789
   ↓
235678
   ↓
23567
   ↓
2356
   ↓
235
   ↓
23
   ↓
2
   ↓
0
```

Every time I remove one digit, I increase the count by 1.

---

## 3. Logic

I need:

* `count` → remembers how many digits I processed
* `num` → the working number that keeps getting smaller

Repeat while `num > 0`:

1. Get the last digit using `% 10`
2. Increase `count`
3. Remove the last digit using `Math.floor(num / 10)`

Stop when `num` becomes `0`.

---

## 4. Important Operations 🔑

### `% 10`

Gets the last digit.

```js
2356789 % 10
// 9
```

Important:
`%` does NOT change the number.

---

### `Math.floor(num / 10)`

Removes the last digit for a positive integer.

```js
Math.floor(2356789 / 10)
// 235678
```

This DOES change `num` when we assign it:

```js
num = Math.floor(num / 10);
```

---

## 5. Why `while`?

I don't know beforehand how many times I need to repeat.

For example:

```text
12       → 2 times
583      → 3 times
2356789  → 7 times
```

So I use:

```js
while (num > 0)
```

`while` is useful when the number of repetitions depends on a condition.

---

## 6. Dry Run 🔍

Input:

```text
num = 2356789
count = 0
```

|     num | last digit | count |
| ------: | ---------: | ----: |
| 2356789 |          9 |     1 |
|  235678 |          8 |     2 |
|   23567 |          7 |     3 |
|    2356 |          6 |     4 |
|     235 |          5 |     5 |
|      23 |          3 |     6 |
|       2 |          2 |     7 |
|       0 |       stop |     7 |

Answer:

```text
7
```

---

## 7. My Mistakes / Aha Moments 🧠

### Mistake 1

I initially thought:

```js
num % 10
```

would change `num`.

But `%` only calculates the remainder.

```js
let rem = num % 10;
```

`num` stays the same.

---

### Mistake 2

I used:

```js
n = Math.floor(num / 10);
```

inside the function.

But `num` is the function's working variable, so I need to update:

```js
num = Math.floor(num / 10);
```

---

### Aha 💡

The function doesn't automatically repeat.

If I want to process every digit, the digit-processing logic must be inside a loop.

---

## 8. Core Pattern 🧩

Many number problems follow this pattern:

```text
Get last digit
      ↓
Process the digit
      ↓
Remove last digit
      ↓
Repeat
```

The two important operations are:

```js
num % 10
```

→ get last digit

```js
Math.floor(num / 10)
```

→ remove last digit

This same idea will be useful for:

* Reverse Number
* Palindrome Number
* Sum of Digits
* Product of Digits
* Largest Digit
* Count a particular digit
* Even/Odd digits

---

## 9. Main Lesson 🔥

Don't memorize the Count Digits code.

Remember the observation:

> **"One digit can be processed by taking `% 10`, then I can remove that digit using `Math.floor(num / 10)`. Repeat until the number becomes 0."**
