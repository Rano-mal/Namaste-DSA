# Day 03 – Functions, Conditionals & Loops

## What I Studied Today

---

## 1. Functions in JavaScript

A **function** is a reusable block of code designed to perform a specific task.

### Function Definition
```js
function functionName(parameters) {
  // function body
}

Terminology

Function Name → Identifies the function (eligibility)

Parameters → Variables that receive values (age)

Arguments → Actual values passed to the function (18)

Example
function eligibility(age) {
  if (age < 18) {
    console.log("You're not eligible to vote.");
  } else {
    console.log("You're eligible to vote.");
  }
}

eligibility(18);

2. Problem Solving Approach
Problem

Create a function that accepts age and determines whether a person is eligible to vote.

Approach

Take age as input

Use an if-else condition

Print the eligibility result

Output
You're eligible to vote.

3. Conditional Statements (if-else)

Conditional statements are used to make decisions based on conditions.

if (condition) {
  // executes if condition is true
} else {
  // executes if condition is false
}

4. Loops

Loops are used to repeat a block of code multiple times until a condition fails.

for Loop Syntax
for (initialization; condition; increment/decrement) {
  // loop body
}

Example
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

5. Dry Run (Loop Execution)
Code
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

Step-by-Step Dry Run
i Value	Condition (i < 5)	Output
0	true	Hello World
1	true	Hello World
2	true	Hello World
3	true	Hello World
4	true	Hello World
5	false	Loop stops


# Key Takeaways (Day 03)
Functions help avoid repetition
Parameters receive data, arguments pass data
if-else controls program flow

# Loops automate repeated tasks

Dry run improves logic clarity
📌 Day 03 completed: Control flow and logic building.
