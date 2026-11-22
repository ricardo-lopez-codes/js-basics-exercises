# JavaScript Basics Project: 10 Structured Exercises

A clean, modular JavaScript foundation project demonstrating core concepts across Arrays, Functions, Objects, and Interactive DOM Manipulation. Engineered to run seamlessly in both Node.js CLI environments and modern web browsers.

---

## Exercise Catalog

### 1. Arrays & Functions (`exercises/01-arrays-functions.js`)

- **Exercise 1: Array Filtering & Mapping (`squareEvenNumbers`)**
  - Filters out odd numbers from a numeric array and returns an array of the remaining even numbers squared using `.filter()` and `.map()`.
- **Exercise 2: Array Aggregation with `reduce` (`aggregateScores`)**
  - Aggregates an array of numeric scores to compute the total sum, arithmetic average, and maximum value in a single traversal using `.reduce()`, without relying on `Math.max(...arr)`.
- **Exercise 3: Array Deduplication & Sorting (`deduplicateAndSort`)**
  - Eliminates duplicate strings using case-insensitive comparison (`Set` normalization) and returns an alphabetically sorted array.
- **Exercise 4: Higher-Order Function / Closure (`createCounter`)**
  - Demonstrates lexical scoping and state encapsulation via closures by returning an object with `increment()`, `decrement()`, and `reset()` methods controlling a private counter.
- **Exercise 5: String & Array Utility Function (`isPalindrome`)**
  - Sanitizes input strings by stripping non-alphanumeric characters and normalizing casing, then verifies palindrome symmetry.

---

### 2. Objects (`exercises/02-objects.js`)

- **Exercise 6: Object Transformation & Grouping (`summarizeTasks`)**
  - Transforms an array of task items (`{ id, title, category, completed }`) into a structured summary report containing completed counts, pending counts, and task titles grouped by category.
- **Exercise 7: Deep Property Access & Immutability (`updateUserProfile`)**
  - Merges profile updates into a user object without mutating the input object, guaranteeing immutability across root and nested `preferences` properties using object spread patterns.

---

### 3. Interactive DOM Manipulation (`index.html`, `style.css`, `exercises/03-dom.js`)

- **Exercise 8: Dynamic List Creation & Removal**
  - Renders an input form that appends dynamic list items with individual delete buttons to a `<ul>`, automatically synchronizing a live counter badge. Supports both button clicks and the Enter key.
- **Exercise 9: Live Search / Real-Time Filtering**
  - Binds an `input` event listener to a search field that filters curriculum topics in real time based on case-insensitive substring matching and updates match counters.
- **Exercise 10: Theme State Toggle, Form Validation & Output Runner**
  - **Inline Validation:** Validates full name, email format (via regular expressions), and message length in real time without triggering page reloads.
  - **Theme Toggle:** Toggles dynamic CSS custom property accent palettes (Sky blue `#38bdf8` vs. Emerald `#34d399`).
  - **Live Console Runner:** Embeds an on-page viewport runner executing Exercises 1–7 directly in the browser and outputting structured results into an interactive terminal container.

---

## Project Structure

```text
javascript-basics/
├── exercises/
│   ├── 01-arrays-functions.js   # Exercises 1–5 (Node.js & browser compatible)
│   ├── 02-objects.js            # Exercises 6–7 (Node.js & browser compatible)
│   └── 03-dom.js                # Exercises 8–10 (Interactive DOM logic)
├── index.html                   # Dark-themed interactive testbench
├── style.css                    # Slate / Sky dark theme styling
└── README.md                    # Project documentation and guide
```

---

## How to Run

### 1. Run CLI Exercises (Node.js)

Verify the array, function, and object exercises from the command line:

```bash
# Run Exercises 1–5 (Arrays & Functions)
node exercises/01-arrays-functions.js

# Run Exercises 6–7 (Objects & Immutability)
node exercises/02-objects.js
```

### 2. Run Interactive DOM Testbench (Browser)

Open `index.html` in any modern web browser:

- Double-click `index.html` in your file explorer, or
- Run a local static server:
  ```bash
  npx serve .
  ```
- Or open directly in your terminal:
  - **Windows (PowerShell):** `Start-Process index.html`
  - **macOS:** `open index.html`
  - **Linux:** `xdg-open index.html`

Once opened:
1. Add and delete items in **Exercise 8** to inspect live count updates.
2. Type queries into the search bar in **Exercise 9** to test instant filtering.
3. Submit sample input to the form in **Exercise 10** to verify validation states.
4. Click **Run Console Exercises** to inspect Exercises 1–7 execution in the on-page viewport.
5. Click **Toggle Accent Mode** to switch color schemes dynamically.

---

## Key JavaScript Concepts Practiced

| Concept | Applications |
| :--- | :--- |
| **Higher-Order Array Methods** | `filter()`, `map()`, `reduce()`, `sort()` for declarative, immutable data transformation. |
| **Lexical Scoping & Closures** | Encapsulating private internal state within factory functions (`createCounter`). |
| **Object Immutability** | Pure update patterns using shallow and nested object spread syntax (`...`). |
| **Event-Driven Architecture** | Event listeners for `click`, `input`, `keydown`, and `submit` events with `event.preventDefault()`. |
| **Dynamic DOM Manipulation** | `createElement()`, `appendChild()`, `remove()`, `classList.toggle()`, and text content updates. |
| **Dual Environment Portability** | Conditional `module.exports` and `window` checks ensuring scripts run identically in Node.js and browsers. |
| **Form & Input Validation** | Regular expression email checks and inline feedback state management. |
