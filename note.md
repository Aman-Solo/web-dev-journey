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
