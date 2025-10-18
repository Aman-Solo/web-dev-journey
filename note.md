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