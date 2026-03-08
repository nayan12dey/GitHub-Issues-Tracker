
### 1. What is the difference between `var`, `let`, and `const`?

**a. var**
- `var` is the old way to declare variables in JavaScript (used before ES6).
- It is **function-scoped**.
- It can be **redeclared** and **reassigned**.
- It is **hoisted** and initialized with `undefined`.

**b. let**
- `let` was introduced in **ES6** and is generally preferred over `var`.
- It is **block-scoped**.
- It can be **reassigned** but **cannot be redeclared** in the same scope.
- It is **hoisted but not initialized**, which causes the **Temporal Dead Zone (TDZ)**.

**c. const**
- `const` is used for variables that **should not be reassigned**.
- It is **block-scoped**.
- It **cannot be reassigned or redeclared**.
- It **must be initialized at the time of declaration**.

---

### 2. What is the Spread Operator (`...`)?

In JavaScript, the **spread operator (`...`)** is used to **expand or unpack elements** of an array, object, or iterable.

**Common Uses:**
- Copying arrays or objects
- Merging arrays or objects


**Example:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);
```

---

### 3. What is the difference between `map()`, `filter()`, and `forEach()`?

**a. map()**
- Creates a **new array** by transforming each element of the original array.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
```

**b. filter()**
- Creates a **new array** with elements that **pass a specific condition**.

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
```

**c. forEach()**
- Used to **loop through an array**.
- It **does not return a new array**.

```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
```

---

### 4. What is an Arrow Function?

An **arrow function** is a **shorter and modern way to write functions** in JavaScript.  
It was introduced in **ES6** and uses the `=>` syntax.

**Example:**

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3));
```

---

### 5. What are Template Literals?

**Template literals** are used to create **strings with embedded variables or expressions**.  
They were introduced in **ES6**.

**Features:**
- Use **backticks (` `` `)** instead of single `' '` or double `" "` quotes
- Support **string interpolation using `${}`**
- Allow **multi-line strings**

**Example:**

```javascript
const name = "Nayan";
const message = `Hello, ${name} is learning JavaScript.`;

console.log(message);
```