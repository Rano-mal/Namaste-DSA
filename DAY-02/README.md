# Day 02 – How JavaScript Works Internally & Core Data Structures

## What I Studied Today

---

## 1. How JavaScript Engine Works

JavaScript code does **not** run directly as written. It goes through multiple internal stages inside the JavaScript Engine (like V8).

### Execution Flow:

1. **Parsing**

   - JavaScript code is read
   - Syntax is checked
   - Converted into an Abstract Syntax Tree (AST)
   - Syntax errors are caught here

2. **Interpretation**

   - Code is initially interpreted line by line
   - This allows fast startup

3. **Just-In-Time (JIT) Compilation & Optimization**

   - Frequently executed code is optimized
   - Converted into highly optimized machine code
   - Improves performance without waiting for full compilation

4. **Execution**

   - Optimized code is executed
   - Functions are called
   - Expressions are evaluated

5. **Memory Management**
   - Memory is allocated for variables, objects, and functions
   - Garbage Collector removes unused memory automatically

**Key Insight:**  
JavaScript is single-threaded, but highly optimized internally.

---

## 2. Arrays in JavaScript

Arrays store ordered collections of data and are **zero-indexed**.

```js
let arr = [5, 10, 2, 0, 1];

| Index | Value |
| ----: | ----: |
|     0 |     5 |
|     1 |    10 |
|     2 |     2 |
|     3 |     0 |
|     4 |     1 |

arr[0] // 5
arr[5] // undefined

3. Important Array Concepts

Arrays can store multiple data types

Arrays can contain other arrays (nested arrays)

let data = [1, "hello", true, [2, 3]];

Capabilities of Arrays

Dynamic size

Indexed access

Can be iterated

Can store complex structures

Arrays are one of the most frequently used data structures in DSA.

4. Objects in JavaScript

Objects are used to store key–value pairs.

let person = {
  name: "Rano",
  age: 20,
  isDeveloper: true
};

Key Characteristics

Defined using curly braces {}

Keys are strings

Values can be of any data type

Used to represent real-world entities

Objects are fundamental for modeling structured data.

Key Takeaways (Day 02)

JavaScript execution involves multiple internal stages

JIT compilation is the reason JavaScript is fast

Arrays are zero-indexed and flexible

undefined means “value does not exist”

Objects store structured data using key–value pairs
```
