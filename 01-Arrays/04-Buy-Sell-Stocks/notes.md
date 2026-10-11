# LeetCode 121 — Best Time to Buy and Sell Stock

## 1. Problem Details

**Platform:** LeetCode  
**Problem number:** 121  
**Difficulty:** Easy  
**Pattern:** Greedy + One Pass  
**Topics:** Arrays, loops, variables, conditional statements

### Problem statement

You are given an array `prices`, where `prices[i]` represents the price of a stock on the `i`th day.

You want to maximize your profit by choosing one day to buy the stock and a different, later day to sell it.

Return the maximum profit you can achieve. If you cannot make a profit, return `0`.

**Important:** You must buy before you sell.

## 2. Examples

### Example 1

**Input:** `prices = [7,1,5,3,6,4]`

**Output:** `5`

**Explanation:** Buy at price `1` and sell later at price `6`.

Profit = 6 − 1 = 5.

### Example 2

**Input:** `prices = [7,6,4,3,1]`

**Output:** `0`

**Explanation:** Prices keep decreasing. There is no profitable transaction, so return `0`.

### Example 3

**Input:** `prices = [2,4,1]`

**Output:** `2`

**Explanation:** Buy at `2` and sell later at `4`.

Profit = 4 − 2 = 2.

## 3. Understand the Problem

We need to find two prices:

- Buying price: a price on an earlier day.
- Selling price: a price on a later day.

**Formula:**

Profit = Selling price − Buying price

We want the largest possible profit.

We cannot buy at a price that appears later in the array and use it to sell on an earlier day.

## 4. Approach

### Greedy + One Pass

Instead of checking every possible buying and selling pair, we go through the array once and keep track of two values.

**Variable 1: `minPrice`**

Stores the cheapest stock price seen so far.

- If today's price is lower, update `minPrice`.
- Otherwise, keep the existing minimum.

**Variable 2: `maxProfit`**

Stores the highest profit found so far.

- Calculate today's possible profit.
- If it is greater than `maxProfit`, update `maxProfit`.
- Otherwise, keep the existing maximum.

### Steps of the algorithm

1. Initialize `minPrice` with the first element of the array.
2. Initialize `maxProfit` to `0`.
3. Loop through the array starting from index `1`.
4. If the current price is less than `minPrice`, update `minPrice`.
5. Calculate the possible profit using the current price and `minPrice`.
6. If the possible profit is greater than `maxProfit`, update `maxProfit`.
7. After the loop finishes, return `maxProfit`.

## 5. Dry Run

Input: `[7,1,5,3,6,4]`

Initial values:

- `minPrice = 7`
- `maxProfit = 0`

| Current price | `minPrice` | Possible profit | `maxProfit` |
|---:|---:|---:|---:|
| 7 | 7 | 0 | 0 |
| 1 | 1 | 0 | 0 |
| 5 | 1 | 4 | 4 |
| 3 | 1 | 2 | 4 |
| 6 | 1 | 5 | 5 |
| 4 | 1 | 3 | 5 |

**Final answer: 5**

Notice that `maxProfit` does not decrease when we find a smaller profit. It changes only when we find a larger one.

## 6. Why Does This Approach Work?

At each day, `minPrice` helps us remember the cheapest price available among the days we've already visited.

Using that price, we calculate the profit we could make by selling on the current day.

We compare that profit with the best profit we've found so far and keep the larger value.

Repeating this for every day lets us find the maximum profit without checking every possible pair.

## 7. Edge Cases

**Case 1: Prices keep decreasing**

Input: `[7,6,4,3,1]`

Output: `0`

No profitable transaction exists.

**Case 2: Only two prices**

Input: `[1,5]`

Output: `4`

Buy at `1` and sell at `5`.

**Case 3: Prices are equal**

Input: `[3,3,3,3]`

Output: `0`

There is no profit.

## 8. Complexity Analysis

**Time complexity: O(n)**

We visit each price once. Here, `n` is the number of prices.

**Space complexity: O(1)**

We use only a fixed number of extra variables, regardless of the array's length.

## 9. Common Mistakes

- Initializing `minPrice` to `0` instead of the first price.
- Comparing `minPrice` directly with `maxProfit`.
- Replacing `maxProfit` with every new profit, even if the new profit is smaller.
- Returning from inside the loop before checking all prices.
- Forgetting that the buying day must come before the selling day.

## 10. What I Learned

- How to track a minimum value while traversing an array.
- How to maintain a maximum result.
- How to use `if` conditions to update variables.
- How to dry-run a loop by tracking variables at each step.
- How the Greedy + One-pass approach can improve efficiency over brute force.

## 11. Revision Checklist

Before considering this problem mastered, I should be able to:

- [ ] Explain the problem in my own words.
- [ ] Explain what `minPrice` and `maxProfit` store.
- [ ] Dry-run the example without looking at the answer.
- [ ] Write the solution from a blank screen.
- [ ] Explain why the time complexity is O(n).
- [ ] Solve it again tomorrow without copying the code.

# LeetCode 121 — Best Time to Buy and Sell Stock

**Pattern:** Greedy + One Pass

### 1. What did I understand?

We are given an array where each number represents the stock price on a particular day. We need to buy at a lower price and sell on a later day to get the maximum profit.

**Profit = Selling price − Buying price**

If we cannot make a profit, we return `0`.

### 2. My logic

- `minPrice` stores the lowest stock price I have seen so far.
- `maxProfit` stores the highest profit I have found so far.
- I start `minPrice` with the first array element and `maxProfit` with `0`.
- I check each price in the array.
- If today's price is lower than `minPrice`, I update `minPrice`.
- I calculate the possible profit using today's price minus `minPrice`.
- If this profit is greater than `maxProfit`, I update `maxProfit`.
- After checking all the prices, I return `maxProfit`.

### 3. Example I understood

Array: `[7, 1, 5, 3, 6, 4]`

- First, the minimum price is `7`.
- When I see `1`, I update `minPrice` to `1`.
- When I see `5`, the profit is `5 - 1 = 4`.
- When I see `3`, the profit is `3 - 1 = 2`. My maximum profit stays `4`.
- When I see `6`, the profit is `6 - 1 = 5`. I update `maxProfit` to `5`.
- When I see `4`, the profit is `4 - 1 = 3`. My maximum profit stays `5`.

**Answer: `5`**

I buy at `1` and sell later at `6`.

### 4. What confused me and what I learned

- I initially set `minPrice = 0`, but that was wrong because all the given stock prices were greater than `0`. I should start with the first array element.
- I learned that I must calculate the possible profit at every iteration.
- Even if the first `if` condition is false, the next independent `if` still executes.
- Since the profit calculation is outside the first `if`, it runs on every iteration.
- I should not return inside the loop because I need to check all the prices first.
- `minPrice` can change, but `maxProfit` should never decrease.

### 5. Complexity

- **Time:** `O(n)` — I visit each array element once.
- **Space:** `O(1)` — I use only a few extra variables.

### 6. Revision question

Can I explain why we update `minPrice` and `maxProfit` separately, without looking at my notes?
