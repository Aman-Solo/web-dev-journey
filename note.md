## HTML and CSS Fundamentals Notes.
## Day 2: Forms, Lists, and Flexbox.

Forms:
<form>: Container for input elements.
<input type="text">: Text field; type="submit" for buttons.

Lists:
<ul>: Bullet points; <ol>: Numbered list; <li>: Each item.

Flexbox Basics:
display: flex;: Turns a container into a flex context.
justify-content: Aligns items horizontally (e.g., space-between).
align-items: Aligns vertically (e.g., center).

## Day 3: Images, Links, and Responsiveness.
->src is the path or URL.
->alt is required for accessibility (screen readers use it).
-><a href="https://example.com" target="_blank">Link Text</a>: target="_blank" opens in new tab.

## Day 4: Flexbox and Grid
Flexbox
->display: flex; =Its direct children become flex items that can be easily aligned and spaced in a row or column.
->flex-wrap: wrap; =lets them wrap onto multiple lines instead of overflowing.
->gap: 10px; =Easier than using margin on every child.
->justify-content: space-between; =Controls how flex items are spaced horizontally (along the main axis).
Grid
->display: grid; =Its children become grid items that you can place in rows and columns.
->grid-template-columns: repeat(3, 1fr); =repeat(3, 1fr) creates 3 columns that share space evenly. (1fr = “one fraction of the available space.”)
->grid-gap: 10px;
-->> PRO TIP :: Flexbox alignment is axis-dependent: In column, align-items handles horizontal, justify-content vertical. Practice on a test file (e.g., Flexbox Froggy game from TOP) to internalize—no excuses for not experimenting.
If it doesn't center, paste your exact CSS/HTML snippet here with the error (e.g., "Image aligns left"). Don't guess—debug with border: 1px solid red; on elements.
## Day 5: Accessibility and Best Practices.
ARIA:
->role="navigation" → identifies a navigation section (used in <nav> or similar elements).
->aria-label="Close menu" → gives screen readers a descriptive label for buttons or icons.
->aria-hidden="true" → hides decorative elements (like icons or images) from assistive technologies.
BEST practices:
->Use semantic HTML elements before adding ARIA — e.g., use <nav>, <header>, <button> instead of <div> with ARIA roles.
->Don’t misuse ARIA attributes — only use them when necessary and keep roles consistent with element behavior (e.g., don’t use role="button" on something that can’t be clicked).
==required → used by browsers to enforce form validation.
==aria-required="true" → tells screen readers (for visually impaired users) that the field is required.
You should use both together for full accessibility support. When a person who’s blind or has low vision visits your website, they usually don’t see the screen — instead, they use a screen reader (software that reads the page out loud).
## Day 6: worked on recipe webpage.
learnt how to make advanced grids. also solidified a bit of html and css.

## Day 7: last day of fundamentals for html and css.
-> added lazy loding to images= it makes the side more fast when it comes to loading (a pro tip).
->Enhance contrast: Use :root { --text-color: #000; --bg-color: #fff; } and apply (e.g., body { color: var(--text-color); background: var(--bg-color); })—why: Variables for easy theming. How: var() references. Pitfall: No fallback = broken in old browsers.
->Add smooth scrolling: html { scroll-behavior: smooth; }—why: Softens jumps from links. How: CSS property. Pitfall: Not supported in IE—polyfill if needed, but ignore for now.
-> added a button in index.html also on recipe.html for future use by javascript: In <footer>: <button id="toggle-dark">Toggle Dark Mode</button>—why: Preps for JS (TOP's JS intro adds event listeners). How: ID for targeting. Pitfall: No JS yet, so it's static—note in comments. and also lastly i styled this button in CSS.

## Day 1: JS Fundamentals (Variables, Data Types, Operators)
-> let name='Aman': Let for reassignable string. Why: Strings for text. How: Quotes for literals. Pitfall: No quotes = error (.thinks it's a variable).
-> const age=21: Const for fixed number. Why: Prevents accidental changes. How: Numbers without quotes. Pitfall: Reassigning const throws error—use for constants like PI.
-> console.log(name+'is'+age): Log to console. Why: Debug output. How: + concatenates. Pitfall: Mixing types (e.g., string + number) works but can coerce (25 becomes '25').    
->let isStudent = true: Boolean. Why: For logic (if checks). How: true/false no quotes. Pitfall: 'true' is string—not boolean.
->let hobbies = ['coding', 'gaming']: Array. Why: Lists. How: [] with commas. Pitfall: Missing comma = syntax error.
->let person = { name: 'Aman', age: 25 }: Object. Why: Structured data. How: {} with key: value. Pitfall: No =, use :.
->console.log(hobbies[0]): Access array index 0. Why: Get items. How: [index]. Pitfall: Out of bounds = undefined.
->console.log(person.name): Dot notation for object. Why: Access properties. How: obj.prop. Pitfall: Wrong key = undefined.
->let sum = 5 + 3: Addition. Why: Math. How: + for numbers. Pitfall: '5' + 3 = '53' (string concat).
->let isAdult = age > 18: Comparison. Why: Conditions. How: > returns boolean. Pitfall: == vs === (loose vs strict—use === to avoid type coercion).
->console.log(isAdult && isStudent): Logical AND. Why: Combine conditions. How: && both true. Pitfall: Short-circuit (if first false, skips second).

also ive built a BMI calculator using function in js and math operations.

## Day 2: js fundamentals control flow (conditions, loops) and reusability(functions).
-> Conditionals: If/else for decisions. Why: Handles logic (e.g., user age check). How: If (true) execute, else alternative. **Pitfall: Loose == vs strict === (TOP warns loose coerces types, leading to bugs like '18' == 18 but '18' !== 18).**
-> Loops: For/while for repetition. Why: Iterate arrays/objects (e.g., list hobbies). How: For (init; condition; increment) **loops fixed times; while for unknown.** Pitfall: Infinite loops (forget increment)—crash browser.
-> Functions: Reusable code blocks. **Why: DRY (Don't Repeat Yourself—TOP mantra).** How: Define with function, call with (). Pitfall: Forgetting return—undefined output.
-> **Challenge**: Even/odd loop—used % operator for remainder.

## day 3: DOM manipulation.(Manipulate the DOM to change HTML/CSS dynamically and handle user events—turning static pages interactive.)
-> DOM = document object model.
-> DOM: Tree structure of HTML elements JS can access/modify. Why: Update page without reload (e.g., change text on click). How: document object. Pitfall: Wrong selector = null error. TOP: "DOM is the bridge between JS and HTML" in their JS course.
-> Events: User actions (click, input). Why: Interactivity (e.g., button click). How: addEventListener. Pitfall: Inline onClick = bad (mixes JS/HTML)—use listeners. TOP: Events for games like Rock-Paper-Scissors.

## day 4: Day 4: Asynchronous JS (promises, async/await, fetch API). also watch CHATgpt topic (hackaton ideas 2024 2025) for the notes with code combo for good understanding.
-> Asynchronous JS: Code that runs "later" (e.g., network requests). Why: Prevents blocking (UI freeze during loads). How: Callbacks/promises/async. Pitfall: Callback hell (nested callbacks)—use promises to avoid. TOP: Lesson uses async for weather APIs, stressing "JS is single-threaded, so async keeps things responsive."
-> Promises: Object for future values. Why: Cleaner than callbacks. How: .then for success, .catch for error. Pitfall: Unhandled rejections = warnings.
-> Async/Await: Sugar for promises. Why: Readable like sync code. How: Await pauses async function. Pitfall: Must be in async function—or top-level await in modules.
-> Fetch: Built-in for HTTP requests. Why: Get data from APIs. How: Returns promise. Pitfall: No error on 404 (check response.ok).

=> So, JS handles slow tasks **asynchronously** — meaning:
“Start this task, continue running other code, and when it’s ready, I’ll come back to it.”

=> **A Promise** represents a value that will be ready in the future.
It can be:
**Pending ⏳** → still running
**Resolved ✅** → finished successfully
**Rejected ❌** → failed (error)
=> so to run a promise we use .then() that runs when it succeeds, .catch() that runs when it fails, and .finally() always runs whether the code works or no it will print out on console showing java finished it work.

=> **Async/Await** we use it insted of .then() and .catch() cause they let you write asynchronous code that looks synchronous.
->async makes a function always return a Promise.
->await pauses that function until the Promise resolves.
-> we can use **try and catch** to handle errors in async.

=>**fetch()** is a built-in browser function that lets you make HTTP requests —
like getting or sending data to a server.
-> fetching is clean when used with async and await;

**DAY 5**
__This small To-Do List web app:__
1)Lets you type a task and add it.
2)Shows all tasks on the page.
3)Saves the tasks to the browser’s localStorage, so they stay even after refresh.
4)Adds a Delete button for each task to remove it both visually and from localStorage.

1) Selecting elements from HTML
=>document → represents the whole web page (the DOM).
=>.querySelector() → finds an element using a CSS selector.
=>#todo-input means: find the element whose id="todo-input".

2) Listening for a button click
=>.addEventListener() tells JavaScript:
“When this event happens (in this case a click), run this code.”
=>The () => {} part is an arrow function, a short way to define what should happen.

3) Prevent adding empty tasks
=>input.value → the text the user typed.
=>.trim() → removes spaces from the start and end.
=>If it’s empty, return stops the function.
This prevents adding blank items.

4) Create a new <li> item
=>document.createElement('li') → creates a new list item element in memory.
=>li.textContent → sets the text inside it (like typing inside the tag).
=>Adding space with .style.marginLeft = '10px'

5) Create a Delete button
=>li.remove() → removes that list item from the screen.
=>Array.from(list.children) → makes an array of all <li>s currently in the list.
=>.map(...) → loops through each <li> to extract just the text (the todo name).
replace('Delete', '') removes the button text from the stored string.
=>localStorage.setItem('todos', JSON.stringify(updatedTodos))
Updates the localStorage with the new list after deletion.

6) Add the delete functionality
=>appendChild() → attaches one element inside another.
=>First line: put the button inside the <li>.
=>Second line: put that <li> inside the <ul> (the list).

7) Add the Delete button into each <li>
=>localStorage → a built-in browser storage that saves data even after refresh.
=>You can only save strings, not arrays.
=>So you use JSON.stringify() to convert your array to a string.
=>When you load it again, use JSON.parse() to convert back to an array.

8) Save all todos to localStorage
=>localStorage.getItem('todos') → gets the stored string.
=>|| '[]' → if nothing was stored yet, use an empty array.
=>JSON.parse() converts the saved text back into a real array.

**Day 6: unit testing with JEST**
=> Unit Testing: Test small code units (e.g., functions). Why: Catches bugs early (TOP: "Test or regret in projects like Tic-Tac-Toe"). How: Jest runs tests, asserts outputs. Pitfall: Poor tests = false confidence.
=> Jest: Popular library. Why: Simple, built-in assertions. How: describe/test/expect. Pitfall: No setup = no run—use npm.
=> !!! npm test only runs if the directory is indicating in the subfile you are working with right now not main.
=> Jest runs in a Node.js environment, which doesn't have a browser DOM (no document, window, etc.). jsdom provides a simulated DOM environment so you can test browser-based code without an actual browser.
=> jsdom is a development dependency because:
    ->It's only needed during testing/development
    ->Not needed in production
    ->Jest automatically uses jsdom when it detects DOM API usage

**Day 7: Advanced JS (closures, this, prototypes)—critical for understanding scope and inheritance before frameworks**
=> __Closures__: Function remembering its scope. Why: Encapsulate data (TOP: "Closures for private variables in Library app"). How: Inner function accesses outer vars. Pitfall: Memory leaks if holding large data.
**function outer()**
->Defines a function.
->Inside it, a variable counter = 0 is created.
->That variable only exists inside outer() normally.
**return function inner()**
->The outer function returns another function (inner).
->The returned function still remembers the variables that existed in outer — even after outer() finishes running.
**const myClosure = outer();**
->Calls outer(), which returns the inner function.
->So now myClosure points to that inner function.
**myClosure()**
->When you call it the first time:
..It increases counter from 0 → 1.
..Returns 1.
->When you call it again:
..counter is still remembered from last time (1).
..It increases to 2 and returns 2.
✅Normally, when a function finishes, all its variables disappear.
But closures “close over” their outer variables — keeping them alive.
So counter is private — only the returned function can access or change it.
This is how we make private variables in JavaScript!

=> __This__: Context keyword. Why: Refers to object (TOP: "This in methods for Battleship game board"). How: Changes based on call (arrow fixes). Pitfall: Lost in callbacks—bind or arrow.

->.bind(Obj) creates a new function that permanently binds this to the object Obj.
->this depends on how a function is called, not where it’s defined.
If you lose the “owner” (Obj), this breaks.
.bind() fixes that.

=> Prototypes: Inheritance mechanism. Why: Share methods (TOP: "Prototypes for efficient objects in OOP projects"). How: proto chain. Pitfall: Modifying built-ins = bad.

->Instead of copying functions to every new object, JS stores them in one shared place — the prototype.
->It’s how inheritance and shared behavior work.

**Day8: the start of REACT**
=> React: Library for UIs. Why: Declarative (describe what, not how)—efficient rerenders (TOP: "React for scalable apps like CV Builder"). How: Components as functions/classes. Pitfall: Thinking it's a framework—it's not; add Redux for state later.
=> Challenge: Person component—used props for dynamic text.

__Day9 : Introduce state for managing changing data in components, using useState hook to create interactive UIs—turning props-only components into dynamic ones.__
=> State: Component's memory for data that changes (TOP: "State for user input in forms"). Why: Triggers re-renders on update. How: useState hook. Pitfall: Direct mutate = no re-render—use setter.
=> useState: Hook for state. Why: Functional components (TOP: "Hooks over classes for simplicity"). How: const [value, setValue] = useState(initial). Pitfall: Hooks top-level only—no conditionals/loops.
=> Re-renders: React updates UI on state change. Why: Declarative. Pitfall: Infinite loops if setter in render.

__Day10: Advanced Hooks (useEffect, useContext)__
**Goal**: Explore useEffect for side effects (e.g., data fetching, subscriptions) and useContext for sharing state without prop drilling—enabling complex, maintainable apps.

__=>useEffect__: Run code on mount/update/unmount. Why: Handle side effects like fetches (TOP: "useEffect for API calls in Weather App"). How: useEffect(fn, [deps]). Pitfall: No deps = infinite loop; empty [] = mount only.
=> useEffect → to handle side effects like fetching data from the internet.
__=>useContext__: Share data tree-wide. Why: Avoid prop drilling (TOP: "Context for themes in CV app"). How: createContext, Provider, useContext. Pitfall: Overuse = performance hit—use for global like themes/auth.
=> useContext → to use our shared global state.
__=>useState__:for small local state (input text).
__=>TOP Tie-In__: Their React lesson uses useEffect for cleanup in timers and useContext for app-wide state in forms, stressing "hooks for lifecycle without classes."

code explanation for day 10. starting from what happened in ThemeContext.
**import React, { createContext, useState } from 'react';**
What’s happening:
    You’re bringing in:
        createContext → lets you create a “context,” like a global data store that any component can use.
        useState → manages internal state (like whether dark mode is on or off).
So React will know this file uses state + shared context logic.

**export const ThemeContext = createContext();**
Explanation:
    This creates an empty context object.
    Think of it like a “global variable” that React components can subscribe to.
    You export it so other files (like App.js or Greeting.js) can use it via:
    **import { ThemeContext } from './ThemeContext';**
When a component reads from this context, it will get whatever data you provide later (the value in the provider).

**export function ThemeProvider({ children }) {**
    A Provider is a special component that gives context data to all its children.
    { children } means anything you wrap inside <ThemeProvider> ... </ThemeProvider> in JSX.
Example usage (you’ll see this in your App.js):
<ThemeProvider>
  <App />
</ThemeProvider>
Everything inside (App in this case) gets access to the context.

**const [isDark, setIsDark] = useState(false);**
What this does:
    Declares a state variable:
        isDark → the current value (starts as false, meaning light mode)
        setIsDark → function to change that value (toggle dark/light)
So this context will control whether your app is in dark mode or light mode.


return (
  <ThemeContext.Provider value={{ isDark, setIsDark }}>
    {children}
  </ThemeContext.Provider>
);
What’s happening:
    You’re wrapping everything inside the ThemeContext.Provider.
    The value prop gives any consumer access to { isDark, setIsDark }.
That means anywhere in your app, if a component calls:
const { isDark, setIsDark } = useContext(ThemeContext);
…it will get access to this shared state, no prop-passing needed!

whats happening in greetings.js

**import React, { useState, useEffect, useContext } from 'react';**
**import { ThemeContext } from './ThemeContext';**
✅ Explanation:
    useState → lets this component remember changing values (count).
    useEffect → lets this component run side effects (like logs, API calls, or cleanup).
    useContext → allows it to access data shared globally through ThemeContext (from your provider).
By importing { ThemeContext }, this file can now read and update the theme data.

the others are literally understandable things but reffer in the future