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