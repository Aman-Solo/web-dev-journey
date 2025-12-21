__so decided to tackel this portion by portion__
__1st PORTION:__ setting up JSON Server as a mock backend for the /todos API -> create db.json with empty todo Array
                 -> then test routes to revise Node/npm basics + UNDERSTAND mock API's for real request.
    => JSON Server cause it provides a quick, file based API to simulate a real server without a full database like PostgreSQL which allows me to focus on CRUD without complex setup. helps me revise npm for dependencies and terminal commands from my first jest/express works.
    =>Challenge: Manual db test—learned --watch auto-updates on save, pitfall with invalid JSON crashing server, revised API routes with Postman for CRUD verification.

__2nd PORTION:__ => Create React (CRA) for front-end. -> __CRA__ handles bundling (Webpack/Babel) so we focus on code
                 => initiallize git wit .gitignore
                 => clean the boilerplate (repetitive code's)
                 =>add basic routing for Home/tasks Page. ->__routing__ sets up views for the spec (e.g., /tasks for list)
                 => npm dependencies
                 => SPA navigation for app structure. -> __SPA__ = a technique where a website loads a single HTML page initially and then dynamically updates content using JavaScript as users interact.
    -> here we have to separate frontend from back so that it calls API.
    -> install __npx create-react-app__ so, Bootstraps React with dev server, Babel for JSX, Webpack for bundling—focus on code, not tools.

__3rd PORTION:__ => Update the Tasks component to fetch GET /todos from the backend (localhost:3001/todos)
                 => display tasks in a styled layout with all fields (title, description, category, due date)
                 => revise async fetch
                 => useEffect for mount
                 => map for rendering
                 => basic CSS for cards to sink in API integration and UI.
    -> in this portion in detail we are going to Branches out the front-end by connecting to the backend API, revising fetch/useEffect from our main track's async JS, PLUS and adding styling to match the spec's "styled layout" without bloat. This ensures dynamic display from mock data.

__4th PORTION:__ => Add a form in Tasks.js for creating tasks with all fields (title, description, category, due date)
                 => handle submit with async POST /todos to backend
                 => then re-fetch GET to update list—revising controlled inputs
                 => onChange/onClick events
                 => async fetch with body to sink in create operations.
    -> here we are branching out the APP with user input to create DATA
    -> revise form handling from react state/event.
    -> POST to match spec API behavior
    # Also as an addittional challenge, added Validation—used if check, pitfall with no trim for empty strings.
    == these ensure additions are carried on to backend.

__5th PORTION:__ => add checkbox for each task so that we mark as complete.
                 => to handle changes on backend ill use async PATCH/todos:id to update completed.
                 => then re-Fetch GET to refresh list to revise event, partial PATCH and params to sink-in update operations
    -> for the mark completed requirment => branchout with partial updates.
    -> revising onChange from form and fetching with method/headers/body 
    -> These ensure Toggle persistiong on backend.
    => for the challenge i added sorting system for it assending to decending and viceversa
        => i'll use a derived state pattern. Instead of changing the original tasks array, create a sorted version of it right before rendering. by creating a new array [...tasks] so we don't mutate the original state directly.

__6th PORTION:__ => add edit function for each fields (title, description, category, due date)
                 => handle save with async PATCH /todos/:id to update backend
                 => then re-fetch GET to refresh list
    -> here revising conditional rendering, multi-field state, and partial PATCH to sink in update operations.

     