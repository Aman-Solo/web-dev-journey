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
    => here we have to separate frontend from back so that it calls API.
    => install __npx create-react-app__ so, Bootstraps React with dev server, Babel for JSX, Webpack for bundling—focus on code, not tools.              
     