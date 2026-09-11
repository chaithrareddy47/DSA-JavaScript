# 🧠 Mistakes & Aha Moments

## 1. `%` vs `/`

`%` → remainder
`/` → division result

For digit problems:

`n % 10` → take last digit
`Math.floor(n / 10)` → remove last digit

---

## 2. Variable reassignment

`let rem = n % 10`

→ n stays unchanged
→ remainder is stored in rem

But:

`n = n % 10`

→ n is replaced by the remainder.

---

## 3. Dry Run

Don't immediately write code.

First:
Input → Output → Manual solution → Repeating action
→ What to remember → Progress → Stop condition → Code

---

## 4. FOR vs WHILE

FOR → known number of repetitions.

WHILE → unknown number of repetitions / condition-based repetition.

# Number Problems - Notes

## Count Digits

### Problem
Given a number, count how many digits it has.

Example:
53210 → 5 digits

### My Approach
1. Input is the number.
2. I need a `count` variable to remember how many digits I processed.
3. Remove one digit at a time.
4. Increase `count` each time.
5. Stop when `n` becomes 0.

### Important Digit Operations

`n % 10`
→ gives the last digit (remainder)

`Math.floor(n / 10)`
→ removes the last digit by keeping the whole-number quotient.

Example:

53210 % 10 → 0

Math.floor(53210 / 10) → 5321


### Important Variable Roles

`n`
→ working number. It keeps getting smaller.

`rem`
→ temporarily stores the last digit.

`count`
→ remembers how many digits were processed.

Important:
`n = n % 10` replaces `n` with the remainder.

If I don't want to lose `n`:

`let rem = n % 10;`

### Mistakes I Made

1. I initially wrote:
   `n = n % 10`

   This changed `n` into the remainder.

2. I forgot that `%` gives the remainder.

3. I confused quotient and remainder.

4. I didn't understand why `5 / 10 = 0.5`.

5. I learned that when the divisor cannot fit into the number even once,
   the whole-number quotient starts with 0.

### FOR vs WHILE

FOR
→ use when the number of repetitions is known.

WHILE
→ use when the number of repetitions is unknown and we repeat
   until a condition becomes false.

Example:

Count digits → `while`
because we don't know beforehand how many digits the number has.

### Dry Run

53210

53210 → 5321 → 532 → 53 → 5 → 0

count:
1 → 2 → 3 → 4 → 5

Final answer = 5