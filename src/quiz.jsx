import { useState } from "react";

const questions = [
  // ===== GIT / GITHUB (15 questions) =====
  {
    id: 1, topic: "Git / GitHub",
    question: "What is Git?",
    options: ["A code hosting website", "A local version control software", "A code editor (IDE)", "A cloud syncing service"],
    correct: [1], multi: false,
    explanation: "Git is a free and open source distributed version control system. It runs locally on your machine."
  },
  {
    id: 2, topic: "Git / GitHub",
    question: "What is GitHub?",
    options: ["A local terminal command", "A programming language", "A cloud platform for hosting Git code", "A version control technology"],
    correct: [2], multi: false,
    explanation: "GitHub is a cloud platform that allows developers to store, manage and share their code using Git."
  },
  {
    id: 3, topic: "Git / GitHub",
    question: "Which terminal command is used to copy an existing repository from a GitHub server to your local machine?",
    options: ["git push", "git clone", "git checkout", "git add"],
    correct: [1], multi: false,
    explanation: "git clone copies a remote repository to your local machine for the first time."
  },
  {
    id: 4, topic: "Git / GitHub",
    question: "Which command saves a snapshot of your changes locally?",
    options: ["git push", "git commit", "git clone", "git pull"],
    correct: [1], multi: false,
    explanation: "git commit creates a snapshot (commit) of all staged changes in the local repository history."
  },
  {
    id: 5, topic: "Git / GitHub",
    question: "In GitHub, what feature is used to propose combining changes from one branch into another (instead of doing it locally)?",
    options: ["Issue Tracker", "Merge Request", "Pull Request", "Sync Changes"],
    correct: [2], multi: false,
    explanation: "A Pull Request on GitHub allows you to propose merging a branch, enabling code review before the merge."
  },
  {
    id: 6, topic: "Git / GitHub",
    question: "What does `git add .` do?",
    options: ["Commits all changes to the repository", "Stages all modified and new files for the next commit", "Pushes all changes to the remote repository", "Creates a new branch"],
    correct: [1], multi: false,
    explanation: "git add . stages all modified and untracked files in the current directory for the next commit."
  },
  {
    id: 7, topic: "Git / GitHub",
    question: "What is a Git branch?",
    options: ["A copy of the entire repository on a remote server", "A parallel line of development that allows working independently", "A snapshot of changes saved to history", "A configuration file for the project"],
    correct: [1], multi: false,
    explanation: "A branch is a parallel line of development. It lets you work on a feature without affecting the main codebase."
  },
  {
    id: 8, topic: "Git / GitHub",
    question: "What is the correct order of commands to save and share code on GitHub?",
    options: ["git commit → git add → git push", "git push → git commit → git add", "git add → git commit → git push", "git clone → git add → git commit"],
    correct: [2], multi: false,
    explanation: "First stage (add), then save locally (commit), then send to remote (push)."
  },
  {
    id: 9, topic: "Git / GitHub",
    question: "What does `git pull` do?",
    options: ["Sends local commits to the remote repository", "Creates a new branch from the current state", "Downloads and integrates changes from the remote repository", "Stages files for the next commit"],
    correct: [2], multi: false,
    explanation: "git pull fetches changes from the remote and merges them into your current local branch."
  },
  {
    id: 10, topic: "Git / GitHub",
    question: "In Git, what state is a file in after `git add` but before `git commit`?",
    options: ["Untracked", "Modified", "Staged", "Committed"],
    correct: [2], multi: false,
    explanation: "After git add, the file is in the Staged state — it's in the staging area waiting to be committed."
  },
  {
    id: 11, topic: "Git / GitHub",
    question: "According to the course convention, which commit message format is correct?",
    options: ["'initial setup'", "'Initialize Django project'", "'django project initialized'", "'SETUP: django'"],
    correct: [1], multi: false,
    explanation: "The professor's convention is verb-first, capitalized: 'Initialize...', 'Add...', 'Fix...' etc."
  },
  {
    id: 12, topic: "Git / GitHub",
    question: "What does `git checkout main` do?",
    options: ["Downloads the main branch from GitHub", "Creates a new branch called main", "Switches to the main branch", "Merges main into the current branch"],
    correct: [2], multi: false,
    explanation: "git checkout <branch> switches your working directory to the specified branch."
  },
  {
    id: 13, topic: "Git / GitHub",
    question: "What does `git push` do?",
    options: ["Downloads changes from GitHub", "Stages files for commit", "Sends your local commits to the remote repository", "Creates a new branch on GitHub"],
    correct: [2], multi: false,
    explanation: "git push uploads your local commits to the remote repository (e.g., GitHub)."
  },
  {
    id: 14, topic: "Git / GitHub",
    question: "Which file is used to list all project Python dependencies so teammates can install them with one command?",
    options: ["package.json", "settings.py", "requirements.txt", ".gitignore"],
    correct: [2], multi: false,
    explanation: "requirements.txt lists Python dependencies. `pip install -r requirements.txt` installs them all."
  },
  {
    id: 15, topic: "Git / GitHub",
    question: "A new file that Git has never tracked before is in which state?",
    options: ["Modified", "Staged", "Unmodified", "Untracked"],
    correct: [3], multi: false,
    explanation: "A brand new file not yet added to Git is Untracked — Git doesn't know it exists yet."
  },

  // ===== VUE.JS (30 questions) =====
  {
    id: 16, topic: "Vue.js",
    question: "Code organized into data(), methods, and computed blocks uses which Vue API?",
    options: ["Composition API", "Options API", "Component API", "Template API"],
    correct: [1], multi: false,
    explanation: "The Options API organizes code into named blocks: data(), methods, computed, mounted, etc."
  },
  {
    id: 17, topic: "Vue.js",
    question: "How must local state be declared in a Vue Options API?",
    options: ["Inside a state array", "As a variable at the top of the script", "Inside a data() function that returns an object", "Directly inside the mounted() hook"],
    correct: [2], multi: false,
    explanation: "In the Options API, data() must be a function that returns an object containing all reactive data."
  },
  {
    id: 18, topic: "Vue.js",
    question: "Which directive links an <input> field to a Vue variable?",
    options: ["@click", "v-for", "v-if", "v-model"],
    correct: [3], multi: false,
    explanation: "v-model creates a two-way binding between a form input and a data property."
  },
  {
    id: 19, topic: "Vue.js",
    question: "Which section should contain functions triggered by user actions (like @click=\"addProduct\")?",
    options: ["data()", "computed", "methods", "watch"],
    correct: [2], multi: false,
    explanation: "The methods section contains functions that can be called from the template or other options."
  },
  {
    id: 20, topic: "Vue.js",
    question: "How do you display a list of products in Vue?",
    options: ["v-loop=\"p in products\"", "v-for=\"p in products\"", "v-foreach=\"p in products\"", "v-list=\"p in products\""],
    correct: [1], multi: false,
    explanation: "v-for is the correct Vue directive for iterating over a list. v-loop, v-foreach, v-list don't exist."
  },
  {
    id: 21, topic: "Vue.js",
    question: "Where should dynamically calculated values (like a cart total) go?",
    options: ["data()", "methods", "mounted()", "computed"],
    correct: [3], multi: false,
    explanation: "computed is for values derived from data. They're cached and only recalculated when dependencies change."
  },
  {
    id: 22, topic: "Vue.js",
    question: "How do you correctly bind a dynamic image URL in Vue?",
    options: ["src=\"{{ p.thumbnail }}\"", "v-image=\"p.thumbnail\"", ":src=\"p.thumbnail\"", "src=\"p.thumbnail\""],
    correct: [2], multi: false,
    explanation: ":src is shorthand for v-bind:src. It binds the src attribute to the JavaScript expression p.thumbnail."
  },
  {
    id: 23, topic: "Vue.js",
    question: "How do you correctly output a computed property in the HTML template?",
    options: ["{{ cartTotal() }}", "<computed>cartTotal</computed>", "v-bind=\"cartTotal\"", "{{ cartTotal }}"],
    correct: [3], multi: false,
    explanation: "Computed properties are accessed like data — with {{ cartTotal }}, NOT as a function call {{ cartTotal() }}."
  },
  {
    id: 24, topic: "Vue.js",
    question: "How is the \"Add to Cart\" button hidden when a product is NOT available?",
    options: ["v-hide=\"p.unavailable\"", "@disabled=\"p.unavailable\"", "v-if=\"!p.unavailable\"", "v-model=\"unavailable\""],
    correct: [2], multi: false,
    explanation: "v-if=\"!p.unavailable\" shows the button only when unavailable is false. The ! negates the condition."
  },
  {
    id: 25, topic: "Vue.js",
    question: "What is the correct syntax to create a Vue application and mount it?",
    options: ["Vue.create({}).attach('#app')", "createApp({}).mount('#app')", "new Vue({}).mount('#app')", "createApp({}).bind('#app')"],
    correct: [1], multi: false,
    explanation: "createApp({}) creates the app instance, and .mount('#app') links it to the HTML element with id='app'."
  },
  {
    id: 26, topic: "Vue.js",
    question: "What does 'two-way data binding' mean in Vue?",
    options: ["Data flows only from JavaScript to HTML", "Data flows only from HTML to JavaScript", "Data flows in both directions between JavaScript and HTML", "Data is bound to two different components"],
    correct: [2], multi: false,
    explanation: "Two-way binding (v-model) means: change in input → updates JS variable, AND change in JS → updates input."
  },
  {
    id: 27, topic: "Vue.js",
    question: "What is the difference between v-bind (:) and v-model?",
    options: ["v-bind is for events, v-model is for attributes", "v-bind is one-way (JS→HTML), v-model is two-way (JS↔HTML)", "v-bind is two-way, v-model is one-way", "There is no difference"],
    correct: [1], multi: false,
    explanation: ":attr is one-way binding for attributes. v-model is two-way for form inputs."
  },
  {
    id: 28, topic: "Vue.js",
    question: "What is the correct syntax to listen to a button click in Vue?",
    options: ["v-click=\"handleClick\"", "on:click=\"handleClick\"", "@click=\"handleClick\"", "v-bind:click=\"handleClick\""],
    correct: [2], multi: false,
    explanation: "@click is shorthand for v-on:click. It listens to the click event and calls handleClick."
  },
  {
    id: 29, topic: "Vue.js",
    question: "What is the key advantage of computed properties over methods?",
    options: ["Computed can accept parameters, methods cannot", "Computed are cached and only re-evaluated when dependencies change", "Computed can modify data(), methods cannot", "Computed are faster to write"],
    correct: [1], multi: false,
    explanation: "Computed properties are cached. If you call cartTotal 10 times in the template, the function runs only once (if data hasn't changed)."
  },
  {
    id: 30, topic: "Vue.js",
    question: "What must the data() function always return?",
    options: ["An array", "A string", "An object", "A function"],
    correct: [2], multi: false,
    explanation: "data() must return a plain JavaScript object. Vue will make all properties of that object reactive."
  },
  {
    id: 31, topic: "Vue.js",
    question: "What does the :key attribute do in a v-for loop?",
    options: ["It filters the list", "It sorts the list", "It helps Vue identify each element uniquely for efficient re-rendering", "It limits the number of items displayed"],
    correct: [2], multi: false,
    explanation: ":key is required in v-for. It gives Vue a unique identifier per item to track DOM updates efficiently."
  },
  {
    id: 32, topic: "Vue.js",
    question: "What does `v-else` require to work?",
    options: ["It must immediately follow a v-if or v-else-if element", "It must be inside a v-for loop", "It requires a condition expression", "It must be paired with v-model"],
    correct: [0], multi: false,
    explanation: "v-else must immediately follow a sibling element with v-if or v-else-if, with no other elements in between."
  },
  {
    id: 33, topic: "Vue.js",
    question: "What is the correct way to prevent a form from reloading the page on submit?",
    options: ["@submit=\"handle\"", "@submit.stop=\"handle\"", "@submit.prevent=\"handle\"", "@submit.cancel=\"handle\""],
    correct: [2], multi: false,
    explanation: "@submit.prevent is equivalent to calling event.preventDefault(). It stops the default form submission."
  },
  {
    id: 34, topic: "Vue.js",
    question: "In the Options API, how do you access a data property inside a method?",
    options: ["data.propertyName", "this.propertyName", "self.propertyName", "app.propertyName"],
    correct: [1], multi: false,
    explanation: "Inside methods, computed, etc., you access data and other options through `this`."
  },
  {
    id: 35, topic: "Vue.js",
    question: "What is declarative rendering in Vue?",
    options: ["Writing imperative code to manually update the DOM", "Describing what HTML should look like based on state, and Vue updates it automatically", "Declaring global variables for the entire app", "Writing server-side HTML templates"],
    correct: [1], multi: false,
    explanation: "Declarative rendering: you describe the desired output based on data. Vue handles all DOM updates automatically."
  },
  {
    id: 36, topic: "Vue.js",
    question: "What does `mounted()` do in Vue?",
    options: ["It defines the initial data for the component", "It is called when the component is first attached to the DOM", "It computes derived values from data", "It handles form submissions"],
    correct: [1], multi: false,
    explanation: "mounted() is a lifecycle hook that runs once the component is rendered and inserted into the DOM — ideal for API calls."
  },
  {
    id: 37, topic: "Vue.js",
    question: "What is the correct way to make an API call when the component loads?",
    options: ["In the data() function", "In the computed section", "In the mounted() lifecycle hook", "In a method called manually each time"],
    correct: [2], multi: false,
    explanation: "mounted() is the right place to fetch data from an API when the component first appears."
  },
  {
    id: 38, topic: "Vue.js",
    question: "In Vue, `v-bind:href=\"link\"` can be shortened to:",
    options: ["*href=\"link\"", "v:href=\"link\"", ":href=\"link\"", "@href=\"link\""],
    correct: [2], multi: false,
    explanation: "The shorthand for v-bind: is just the colon :. So v-bind:href becomes :href."
  },
  {
    id: 39, topic: "Vue.js",
    question: "In Vue, `v-on:click=\"doIt\"` can be shortened to:",
    options: ["#click=\"doIt\"", "v:click=\"doIt\"", ":click=\"doIt\"", "@click=\"doIt\""],
    correct: [3], multi: false,
    explanation: "The shorthand for v-on: is @. So v-on:click becomes @click."
  },
  {
    id: 40, topic: "Vue.js",
    question: "Which of the following code snippets correctly adds an item to a list in Vue?",
    options: ["this.items.add(newItem)", "items.push(newItem)", "this.items.push(newItem)", "data.items.append(newItem)"],
    correct: [2], multi: false,
    explanation: "You must use `this` to access data inside methods. push() is the correct JS array method."
  },
  {
    id: 41, topic: "Vue.js",
    question: "Which of the following correctly displays a Vue variable 'username' in HTML?",
    options: ["<p v-show=\"username\"></p>", "<p [username]></p>", "<p>{{ username }}</p>", "<p v-text:username></p>"],
    correct: [2], multi: false,
    explanation: "{{ }} (mustache syntax) is used to interpolate data values into text content."
  },
  {
    id: 42, topic: "Vue.js",
    question: "Which Vue directive is used to conditionally remove or add an element to the DOM?",
    options: ["v-show", "v-if", "v-hide", "v-toggle"],
    correct: [1], multi: false,
    explanation: "v-if actually removes/adds the element from the DOM. v-show only toggles CSS display:none."
  },
  {
    id: 43, topic: "Vue.js",
    question: "What is the correct way to import Vue from a CDN in a plain HTML file?",
    options: ["import Vue from 'vue'", "import { createApp } from \"https://unpkg.com/vue@3/dist/vue.esm-browser.js\"", "<script src='vue.js'></script> then new Vue()", "require('vue').createApp()"],
    correct: [1], multi: false,
    explanation: "The course uses the ESM browser build from unpkg CDN with import { createApp }."
  },
  {
    id: 44, topic: "Vue.js",
    question: "How do you correctly bind a dynamic CSS class in Vue?",
    options: ["class=\"{{ isActive ? 'active' : '' }}\"", ":class=\"{ active: isActive }\"", "v-class=\"isActive\"", "@class=\"active\""],
    correct: [1], multi: false,
    explanation: ":class with an object syntax adds the class 'active' only when isActive is truthy."
  },
  {
    id: 45, topic: "Vue.js",
    question: "What is the correct fetch call in Vue to load data from /api/orders/ and store it?",
    options: [
      "this.orders = fetch('/api/orders/')",
      "fetch('/api/orders/').then(r => r.json()).then(data => { this.orders = data })",
      "get('/api/orders/').assign(this.orders)",
      "http.get('/api/orders/', this.orders)"
    ],
    correct: [1], multi: false,
    explanation: "fetch() returns a Promise. You must chain .then(r => r.json()) to parse JSON, then assign the data."
  },

  // ===== REST API (15 questions) =====
  {
    id: 46, topic: "REST API",
    question: "♣ What are the primary benefits of separating frontend and backend via a REST API? (multiple correct)",
    options: [
      "It reduces the amount of data transferred",
      "The API can be consumed by different frontend client technologies",
      "It improves UX by reducing load time",
      "It allows backend updates without affecting the frontend"
    ],
    correct: [1, 3], multi: true,
    explanation: "B and D are correct: different clients (web, mobile) can use the same API, and backend/frontend evolve independently."
  },
  {
    id: 47, topic: "REST API",
    question: "Which HTTP method is used to CREATE a new resource?",
    options: ["GET", "PUT", "POST", "DELETE"],
    correct: [2], multi: false,
    explanation: "POST → Create. GET → Read. PUT/PATCH → Update. DELETE → Delete. (CRUD)"
  },
  {
    id: 48, topic: "REST API",
    question: "Which HTTP method is used to READ a resource?",
    options: ["GET", "POST", "PUT", "PATCH"],
    correct: [0], multi: false,
    explanation: "GET is the read-only method. It never modifies data on the server."
  },
  {
    id: 49, topic: "REST API",
    question: "What does REST stand for?",
    options: ["Remote Execution of Structured Tasks", "Representational State Transfer", "Relational Entity Service Transfer", "Resource Endpoint Service Technology"],
    correct: [1], multi: false,
    explanation: "REST = Representational State Transfer, defined by Roy T. Fielding in his 2000 dissertation."
  },
  {
    id: 50, topic: "REST API",
    question: "Who created REST and in what year?",
    options: ["Tim Berners-Lee in 1991", "Linus Torvalds in 2005", "Roy T. Fielding in 2000", "Guido van Rossum in 1995"],
    correct: [2], multi: false,
    explanation: "Roy T. Fielding defined REST in his PhD dissertation in 2000."
  },
  {
    id: 51, topic: "REST API",
    question: "What is the difference between PUT and PATCH?",
    options: ["PUT deletes, PATCH creates", "PUT replaces the entire resource, PATCH partially updates it", "PUT is for lists, PATCH is for single items", "There is no difference"],
    correct: [1], multi: false,
    explanation: "PUT replaces the whole object (you must send all fields). PATCH updates only the fields you send."
  },
  {
    id: 52, topic: "REST API",
    question: "What HTTP status code indicates a resource was successfully CREATED?",
    options: ["200", "201", "204", "404"],
    correct: [1], multi: false,
    explanation: "201 Created is returned after a successful POST. 200 OK is for successful GET/PUT."
  },
  {
    id: 53, topic: "REST API",
    question: "What HTTP status code means the user is NOT authenticated (not logged in)?",
    options: ["400", "403", "401", "500"],
    correct: [2], multi: false,
    explanation: "401 Unauthorized = not logged in. 403 Forbidden = logged in but no permission."
  },
  {
    id: 54, topic: "REST API",
    question: "What HTTP status code means the resource was NOT FOUND?",
    options: ["400", "403", "500", "404"],
    correct: [3], multi: false,
    explanation: "404 Not Found is returned when the requested URL/resource doesn't exist."
  },
  {
    id: 55, topic: "REST API",
    question: "Which of the following is NOT one of the 6 REST architectural constraints?",
    options: ["Statelessness", "Client-Server", "Cacheability", "Relational Database"],
    correct: [3], multi: false,
    explanation: "The 6 constraints are: Client-Server, Statelessness, Cacheability, Uniform Interface, Layered System, Code on Demand."
  },
  {
    id: 56, topic: "REST API",
    question: "What does 'stateless' mean in REST?",
    options: ["The server stores all client session data", "Each request must contain all needed info; the server keeps no session memory", "The client cannot store any data locally", "The API has no state machine"],
    correct: [1], multi: false,
    explanation: "Stateless = the server treats each request independently, with no memory of previous requests."
  },
  {
    id: 57, topic: "REST API",
    question: "Which of these URLs follows REST conventions for accessing order number 5?",
    options: ["/api/getOrder?id=5", "/api/orders/delete/5", "/api/orders/5/", "/api/orders?action=get&id=5"],
    correct: [2], multi: false,
    explanation: "REST URLs identify resources (/orders/5/). The action is conveyed by the HTTP verb (GET, DELETE, etc.)."
  },
  {
    id: 58, topic: "REST API",
    question: "In a REST API, what format is most commonly used to exchange data?",
    options: ["XML", "HTML", "CSV", "JSON"],
    correct: [3], multi: false,
    explanation: "JSON (JavaScript Object Notation) is the standard data exchange format in modern REST APIs."
  },
  {
    id: 59, topic: "REST API",
    question: "What does CRUD stand for?",
    options: ["Create, Read, Update, Delete", "Connect, Retrieve, Update, Dispatch", "Create, Render, Use, Deploy", "Configure, Run, Update, Debug"],
    correct: [0], multi: false,
    explanation: "CRUD = Create, Read, Update, Delete. These map to POST, GET, PUT/PATCH, DELETE."
  },
  {
    id: 60, topic: "REST API",
    question: "Why is CORS needed when Vue.js (port 5173) calls Django (port 8000)?",
    options: ["Because Vue and Django use different languages", "Because the browser blocks cross-origin requests by default", "Because Django cannot receive JSON without it", "Because REST requires same-server requests"],
    correct: [1], multi: false,
    explanation: "The Same-Origin Policy in browsers blocks requests between different origins. CORS headers tell the browser to allow it."
  },

  // ===== DJANGO (20 questions) =====
  {
    id: 61, topic: "Django",
    question: "What is the primary purpose of a Django model?",
    options: ["To handle HTTP requests and responses", "To define the user interface and layout", "To manage routing and URL patterns", "To define the data structure and interact with the database"],
    correct: [3], multi: false,
    explanation: "A Django model defines the data structure (fields, relationships) and automatically maps to a database table."
  },
  {
    id: 62, topic: "Django",
    question: "What does `django-admin startproject myproject .` do?",
    options: ["Creates a new Django application", "Creates the project configuration files in the current directory", "Starts the development server", "Initializes the database"],
    correct: [1], multi: false,
    explanation: "startproject creates the project structure. The . means 'use the current folder' instead of creating a subfolder."
  },
  {
    id: 63, topic: "Django",
    question: "What does `python manage.py startapp polls` do?",
    options: ["Starts the dev server for polls", "Creates a new Django application called polls", "Runs tests for polls", "Creates a database table for polls"],
    correct: [1], multi: false,
    explanation: "startapp creates a new application folder (polls/) with models.py, views.py, etc."
  },
  {
    id: 64, topic: "Django",
    question: "What is the correct command to start the Django development server?",
    options: ["python manage.py start", "python manage.py serve", "python manage.py runserver", "django-admin runserver"],
    correct: [2], multi: false,
    explanation: "python manage.py runserver starts the built-in development server, usually on http://localhost:8000"
  },
  {
    id: 65, topic: "Django",
    question: "What does `python manage.py makemigrations` do?",
    options: ["Applies existing migrations to the database", "Creates migration files based on changes to your models", "Resets the database", "Checks for syntax errors in models.py"],
    correct: [1], multi: false,
    explanation: "makemigrations reads models.py and generates migration files (the 'recipe' describing what SQL to run)."
  },
  {
    id: 66, topic: "Django",
    question: "What does `python manage.py migrate` do?",
    options: ["Creates migration files from models", "Applies migration files to create/modify database tables", "Rolls back the last migration", "Exports the database schema"],
    correct: [1], multi: false,
    explanation: "migrate executes the migration files and actually creates or alters the tables in the database."
  },
  {
    id: 67, topic: "Django",
    question: "Which architectural pattern does Django follow?",
    options: ["MVC (Model-View-Controller)", "MVP (Model-View-Presenter)", "MVT (Model-View-Template)", "MVVM (Model-View-ViewModel)"],
    correct: [2], multi: false,
    explanation: "Django follows MVT: Model (data), View (logic), Template (HTML). The View in Django is more like a Controller."
  },
  {
    id: 68, topic: "Django",
    question: "What does the `settings.py` file contain?",
    options: ["The URL routing rules", "The database models", "The global project configuration (database, installed apps, etc.)", "The view functions"],
    correct: [2], multi: false,
    explanation: "settings.py contains all project configuration: INSTALLED_APPS, DATABASES, DEBUG, SECRET_KEY, etc."
  },
  {
    id: 69, topic: "Django",
    question: "What does `INSTALLED_APPS` in `settings.py` do?",
    options: ["Lists all Python packages installed", "Registers applications and libraries that Django should load", "Defines URL patterns", "Configures the database connection"],
    correct: [1], multi: false,
    explanation: "INSTALLED_APPS tells Django which apps are active. You must add 'rest_framework' and your app here."
  },
  {
    id: 70, topic: "Django",
    question: "What is the role of `urls.py`?",
    options: ["Defines the database schema", "Contains HTML templates", "Maps URLs to view functions", "Configures authentication"],
    correct: [2], multi: false,
    explanation: "urls.py defines URL patterns and links each URL to a view (or a ViewSet via a router in DRF)."
  },
  {
    id: 71, topic: "Django",
    question: "What does the `include()` function do in Django's urls.py?",
    options: ["Imports a Python module", "Imports URL patterns from another urls.py file", "Includes an HTML template in the response", "Adds middleware"],
    correct: [1], multi: false,
    explanation: "include() lets you split URL patterns across multiple files — e.g., include('parcel_manager.urls')."
  },
  {
    id: 72, topic: "Django",
    question: "What approach does Django use to manage the database schema?",
    options: ["Database first (write SQL first)", "Code first (write Python models first, Django creates SQL)", "Both are equally supported", "Django only supports NoSQL"],
    correct: [1], multi: false,
    explanation: "Django is Code First: you define models in Python, then makemigrations/migrate generates and applies the SQL."
  },
  {
    id: 73, topic: "Django",
    question: "What does `on_delete=models.CASCADE` mean on a ForeignKey?",
    options: ["When the child is deleted, the parent is also deleted", "When the parent is deleted, all related children are deleted too", "The relationship is deleted but records remain", "The FK is set to NULL when parent is deleted"],
    correct: [1], multi: false,
    explanation: "CASCADE = if the parent (e.g., Product) is deleted, all related children (e.g., Orders) are automatically deleted."
  },
  {
    id: 74, topic: "Django",
    question: "Which field type would you use for a short text like a name in Django?",
    options: ["models.TextField()", "models.CharField(max_length=...)", "models.IntegerField()", "models.StringField()"],
    correct: [1], multi: false,
    explanation: "CharField is for short strings and requires max_length. TextField is for unlimited long text (no max_length needed)."
  },
  {
    id: 75, topic: "Django",
    question: "What does the `__str__` method on a Django model do?",
    options: ["Converts the model to JSON", "Defines what is displayed when the object is shown (e.g., in admin)", "Validates model data before saving", "Handles deletion"],
    correct: [1], multi: false,
    explanation: "__str__ defines the human-readable string for an object. Used in the Admin interface and in print() calls."
  },
  {
    id: 76, topic: "Django",
    question: "What does `null=True, blank=True` on a field allow?",
    options: ["The field to store boolean values", "The field to be left empty (null in DB, blank in forms)", "The field to accept multiple values", "The field to auto-generate a value"],
    correct: [1], multi: false,
    explanation: "null=True allows NULL in the database. blank=True allows the field to be empty in forms/serializers."
  },
  {
    id: 77, topic: "Django",
    question: "In which file do you register a model to make it visible in Django Admin?",
    options: ["models.py", "views.py", "urls.py", "admin.py"],
    correct: [3], multi: false,
    explanation: "In admin.py you register models with admin.site.register(MyModel) to manage them in the admin interface."
  },
  {
    id: 78, topic: "Django",
    question: "What does `python manage.py loaddata data` do?",
    options: ["Exports database data to JSON", "Loads test data (fixtures) into the database", "Resets the database", "Imports from a CSV file"],
    correct: [1], multi: false,
    explanation: "loaddata loads fixture files into the database — useful for providing test data across a team."
  },
  {
    id: 79, topic: "Django",
    question: "What is the correct cycle from model change to database update?",
    options: [
      "migrate → makemigrations → runserver",
      "makemigrations → migrate",
      "migrate → makemigrations",
      "startapp → migrate"
    ],
    correct: [1], multi: false,
    explanation: "You must always: 1) makemigrations (generate the migration file), then 2) migrate (apply it to the DB)."
  },
  {
    id: 80, topic: "Django",
    question: "The cycle from Python model to SQL database is: models.py → makemigrations → ___ → SQL Schema",
    options: ["views.py", "migration.py", "settings.py", "admin.py"],
    correct: [1], multi: false,
    explanation: "makemigrations generates migration.py files. Then `migrate` reads them and applies the SQL changes."
  },

  // ===== DJANGO REST FRAMEWORK (20 questions) =====
  {
    id: 81, topic: "Django REST Framework",
    question: "Which best describes the primary role of a DRF serializer?",
    options: [
      "To convert complex data types (like model instances) to and from JSON",
      "To define URL patterns for API endpoints",
      "To manage user authentication and authorization",
      "To handle database migrations"
    ],
    correct: [0], multi: false,
    explanation: "Serializers convert Python objects (models) to JSON for the API response, and validate/parse incoming JSON."
  },
  {
    id: 82, topic: "Django REST Framework",
    question: "What does `ModelViewSet` automatically provide?",
    options: ["Only GET and POST", "All CRUD operations: list, create, retrieve, update, destroy", "Only read operations", "URL routing and authentication"],
    correct: [1], multi: false,
    explanation: "ModelViewSet gives you all 5 operations for free: list (GET /), create (POST /), retrieve (GET /id/), update (PUT /id/), destroy (DELETE /id/)."
  },
  {
    id: 83, topic: "Django REST Framework",
    question: "What does `DefaultRouter` do in DRF?",
    options: ["Sets the default authentication method", "Automatically generates URL patterns for a ViewSet", "Creates a default superuser", "Configures the default response format"],
    correct: [1], multi: false,
    explanation: "router.register(r'orders', OrderViewSet) automatically creates /orders/ and /orders/{id}/ with all HTTP methods."
  },
  {
    id: 84, topic: "Django REST Framework",
    question: "Which DRF permission allows unauthenticated users to read (GET) but requires login to modify?",
    options: ["IsAuthenticated", "AllowAny", "IsAdminUser", "IsAuthenticatedOrReadOnly"],
    correct: [3], multi: false,
    explanation: "IsAuthenticatedOrReadOnly: anonymous users can GET, but POST/PUT/DELETE require authentication."
  },
  {
    id: 85, topic: "Django REST Framework",
    question: "What does `queryset = Order.objects.all()` in a ViewSet define?",
    options: ["A filter in admin", "The set of objects the ViewSet exposes to the API", "The SQL to create the orders table", "The ordering of results"],
    correct: [1], multi: false,
    explanation: "queryset defines which objects are accessible via the API. Order.objects.all() means all orders."
  },
  {
    id: 86, topic: "Django REST Framework",
    question: "What is the purpose of `fields` in a ModelSerializer's Meta class?",
    options: ["To define which HTTP methods are allowed", "To specify which model fields appear in the API response", "To set validation rules", "To configure database columns"],
    correct: [1], multi: false,
    explanation: "fields lists exactly which model attributes are serialized into JSON. You control what the API exposes."
  },
  {
    id: 87, topic: "Django REST Framework",
    question: "What does `read_only=True` on a serializer field mean?",
    options: ["Only admins can modify it", "Included in responses but cannot be set by API requests", "Never included in API responses", "The field is encrypted"],
    correct: [1], multi: false,
    explanation: "read_only=True means the field is returned in GET responses but ignored when creating/updating via POST/PUT."
  },
  {
    id: 88, topic: "Django REST Framework",
    question: "What is a `SerializerMethodField` used for?",
    options: ["To validate incoming data", "To add a custom computed field to the serializer output", "To define which HTTP methods are allowed", "To serialize ForeignKeys automatically"],
    correct: [1], multi: false,
    explanation: "SerializerMethodField adds a read-only field whose value is computed by a method get_<fieldname>()."
  },
  {
    id: 89, topic: "Django REST Framework",
    question: "If you declare `total = serializers.SerializerMethodField()`, what must the method be named?",
    options: ["calculate_total()", "total_method()", "get_total()", "compute_total()"],
    correct: [2], multi: false,
    explanation: "The naming convention is mandatory: get_ + field name. So for 'total', the method must be get_total(self, obj)."
  },
  {
    id: 90, topic: "Django REST Framework",
    question: "What does `many=True` on a serializer field indicate?",
    options: ["The field allows null values", "The field serializes a list of related objects", "The field has multiple validation rules", "The field maps to multiple columns"],
    correct: [1], multi: false,
    explanation: "many=True is used when a relation returns multiple objects (e.g., all orderlines of an order)."
  },
  {
    id: 91, topic: "Django REST Framework",
    question: "What is the N+1 query problem?",
    options: ["A bug where migrations run twice", "Making 1 query for a list + 1 extra query per item to get related data", "An error when N users access the API at once", "A performance issue where serializers run N times"],
    correct: [1], multi: false,
    explanation: "N+1: if you have 10 orders and each needs its customer loaded, Django makes 1+10=11 queries instead of 1 or 2."
  },
  {
    id: 92, topic: "Django REST Framework",
    question: "Which method solves the N+1 problem for ForeignKey (Many-to-One) relations?",
    options: ["filter()", "annotate()", "select_related()", "prefetch_related()"],
    correct: [2], multi: false,
    explanation: "select_related() performs a SQL JOIN to fetch the related ForeignKey object in a single query."
  },
  {
    id: 93, topic: "Django REST Framework",
    question: "Which method solves the N+1 problem for reverse ForeignKey or ManyToMany relations?",
    options: ["select_related()", "prefetch_related()", "filter()", "distinct()"],
    correct: [1], multi: false,
    explanation: "prefetch_related() runs a separate optimized query to batch-load all related objects at once."
  },
  {
    id: 94, topic: "Django REST Framework",
    question: "What does `SAFE_METHODS` contain in DRF permissions?",
    options: ["('POST', 'PUT', 'PATCH')", "('GET', 'HEAD', 'OPTIONS')", "('GET', 'POST')", "('HEAD', 'DELETE', 'OPTIONS')"],
    correct: [1], multi: false,
    explanation: "SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS') — these methods do not modify data on the server."
  },
  {
    id: 95, topic: "Django REST Framework",
    question: "To create a custom permission in DRF, you must inherit from:",
    options: ["models.Permission", "serializers.BaseSerializer", "permissions.BasePermission", "viewsets.ViewSet"],
    correct: [2], multi: false,
    explanation: "Custom permissions must inherit from rest_framework.permissions.BasePermission and implement has_permission()."
  },
  {
    id: 96, topic: "Django REST Framework",
    question: "What must you add to urls.py to enable the DRF browsable API login/logout buttons?",
    options: [
      "path('api/', include('rest_framework.api_urls'))",
      "path('api-auth/', include('rest_framework.urls'))",
      "path('auth/', include('django.contrib.auth.urls'))",
      "path('login/', rest_framework.login)"
    ],
    correct: [1], multi: false,
    explanation: "path('api-auth/', include('rest_framework.urls')) adds login/logout endpoints to the browsable API."
  },
  {
    id: 97, topic: "Django REST Framework",
    question: "What does overriding `get_queryset()` in a ViewSet allow?",
    options: ["Define which serializer to use per request", "Filter objects based on the current user or request", "Override the HTTP methods accepted", "Cache database results"],
    correct: [1], multi: false,
    explanation: "get_queryset() lets you return different objects depending on who is requesting, e.g., only the user's own orders."
  },
  {
    id: 98, topic: "Django REST Framework",
    question: "Which two entries must be in `INSTALLED_APPS` for a basic DRF project?",
    options: ["'django' and 'rest'", "'rest_framework' and your app name", "'drf' and 'api'", "'rest_framework' and 'cors'"],
    correct: [1], multi: false,
    explanation: "You must add both 'rest_framework' (for DRF) and your app (e.g., 'parcel_manager') to INSTALLED_APPS."
  },
  {
    id: 99, topic: "Django REST Framework",
    question: "In DRF, which authentication class uses Django's built-in login session?",
    options: ["BasicAuthentication", "TokenAuthentication", "SessionAuthentication", "JWTAuthentication"],
    correct: [2], multi: false,
    explanation: "SessionAuthentication uses Django's session cookies — what's used when you log in via the browsable API."
  },
  {
    id: 100, topic: "Django REST Framework",
    question: "Which DRF configuration applies a permission rule globally to ALL endpoints?",
    options: [
      "Setting permission_classes on each ViewSet individually",
      "Setting DEFAULT_PERMISSION_CLASSES in REST_FRAMEWORK in settings.py",
      "Adding permissions in urls.py",
      "Using a middleware class"
    ],
    correct: [1], multi: false,
    explanation: "DEFAULT_PERMISSION_CLASSES in the REST_FRAMEWORK dict in settings.py sets the default for all views."
  },
];

const TOPIC_COLORS = {
  "Git / GitHub": "#f59e0b",
  "Vue.js": "#10b981",
  "REST API": "#3b82f6",
  "Django": "#8b5cf6",
  "Django REST Framework": "#ef4444",
};

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const [filter, setFilter] = useState("All");

  const topics = ["All", "Git / GitHub", "Vue.js", "REST API", "Django", "Django REST Framework"];
  const filtered = filter === "All" ? questions : questions.filter(q => q.topic === filter);

  const q = filtered[current];
  if (!q) return <div style={{color:'white',padding:40}}>No questions for this filter.</div>;

  const color = TOPIC_COLORS[q.topic] || "#6b7280";

  const toggle = (i) => {
    if (submitted) return;
    if (q.multi) {
      setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
    } else {
      setSelected([i]);
    }
  };

  const isCorrect = () => {
    const s = [...selected].sort().join(',');
    const c = [...q.correct].sort().join(',');
    return s === c;
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    const correct = isCorrect();
    setSubmitted(true);
    if (correct) setScore(s => s + 1);
    setResults(prev => [...prev, { id: q.id, correct }]);
  };

  const handleNext = () => {
    if (current + 1 >= filtered.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected([]);
      setSubmitted(false);
    }
  };

  const restart = () => {
    setCurrent(0); setSelected([]); setSubmitted(false);
    setScore(0); setResults([]); setFinished(false);
  };

  const pct = Math.round((score / filtered.length) * 100);

  if (finished) {
    const grade = pct >= 90 ? "🏆 Excellent !" : pct >= 75 ? "✅ Bien !" : pct >= 60 ? "⚠️ Passable" : "❌ À retravailler";
    const wrong = results.filter(r => !r.correct).map(r => filtered.find(q => q.id === r.id));
    return (
      <div style={{minHeight:'100vh',background:'#0f172a',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem',fontFamily:"'Courier New', monospace"}}>
        <div style={{background:'#1e293b',borderRadius:16,padding:'2.5rem',maxWidth:600,width:'100%',border:'2px solid #334155',textAlign:'center'}}>
          <div style={{fontSize:64,marginBottom:8}}>{grade.split(' ')[0]}</div>
          <h1 style={{color:'#f1f5f9',fontSize:28,margin:'0 0 8px'}}>{grade.split(' ').slice(1).join(' ')}</h1>
          <div style={{fontSize:56,fontWeight:'bold',color:color,margin:'16px 0'}}>{pct}%</div>
          <div style={{color:'#94a3b8',fontSize:18,marginBottom:24}}>{score} / {filtered.length} questions correctes</div>
          {wrong.length > 0 && (
            <div style={{textAlign:'left',background:'#0f172a',borderRadius:8,padding:16,marginBottom:24}}>
              <div style={{color:'#ef4444',fontWeight:'bold',marginBottom:8}}>❌ Questions ratées :</div>
              {wrong.map(w => (
                <div key={w.id} style={{color:'#94a3b8',fontSize:13,marginBottom:6,paddingLeft:8,borderLeft:'2px solid #ef4444'}}>
                  <span style={{color:TOPIC_COLORS[w.topic],fontWeight:'bold'}}>Q{w.id}</span> — {w.question.substring(0,60)}...
                </div>
              ))}
            </div>
          )}
          <button onClick={restart} style={{background:color,color:'white',border:'none',borderRadius:8,padding:'12px 32px',fontSize:16,cursor:'pointer',fontFamily:"'Courier New', monospace",fontWeight:'bold'}}>
            🔄 Recommencer
          </button>
        </div>
      </div>
    );
  }

  const progress = ((current) / filtered.length) * 100;

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',fontFamily:"'Courier New', monospace",padding:'1.5rem'}}>
      {/* Header */}
      <div style={{maxWidth:720,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:8}}>
          <div style={{color:'#f1f5f9',fontWeight:'bold',fontSize:18}}>📚 QCM Exam Prep</div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {topics.map(t => (
              <button key={t} onClick={() => { setFilter(t); setCurrent(0); setSelected([]); setSubmitted(false); setScore(0); setResults([]); }}
                style={{background: filter===t ? color : '#1e293b', color: filter===t ? 'white' : '#94a3b8', border: `1px solid ${filter===t ? color : '#334155'}`, borderRadius:6, padding:'4px 10px', fontSize:11, cursor:'pointer', fontFamily:"'Courier New', monospace"}}>
                {t === "All" ? `All (${questions.length})` : t.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{background:'#1e293b',borderRadius:4,height:6,marginBottom:20,overflow:'hidden'}}>
          <div style={{background:color,height:'100%',width:`${progress}%`,transition:'width 0.3s'}} />
        </div>

        {/* Stats row */}
        <div style={{display:'flex',gap:16,marginBottom:20,flexWrap:'wrap'}}>
          <div style={{color:'#94a3b8',fontSize:13}}>Question <span style={{color:'#f1f5f9',fontWeight:'bold'}}>{current+1}</span> / {filtered.length}</div>
          <div style={{color:'#94a3b8',fontSize:13}}>Score: <span style={{color:'#10b981',fontWeight:'bold'}}>{score}</span> ✓ <span style={{color:'#ef4444',fontWeight:'bold'}}>{results.length - score}</span> ✗</div>
          <div style={{background:color+'22',color:color,borderRadius:4,padding:'2px 8px',fontSize:12,fontWeight:'bold'}}>{q.topic}</div>
          {q.multi && <div style={{background:'#f59e0b22',color:'#f59e0b',borderRadius:4,padding:'2px 8px',fontSize:12}}>♣ Multiple réponses</div>}
        </div>

        {/* Question card */}
        <div style={{background:'#1e293b',borderRadius:12,border:`1px solid ${color}44`,padding:'1.8rem',marginBottom:16}}>
          <div style={{color:'#f1f5f9',fontSize:17,fontWeight:'bold',lineHeight:1.5,marginBottom:24}}>
            Q{q.id}. {q.question}
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {q.options.map((opt, i) => {
              const isSelected = selected.includes(i);
              const isRight = q.correct.includes(i);
              let bg = '#0f172a', border = '#334155', txtColor = '#cbd5e1';
              if (!submitted) {
                if (isSelected) { bg = color+'33'; border = color; txtColor = '#f1f5f9'; }
              } else {
                if (isRight) { bg = '#10b98133'; border = '#10b981'; txtColor = '#10b981'; }
                else if (isSelected && !isRight) { bg = '#ef444433'; border = '#ef4444'; txtColor = '#ef4444'; }
              }
              return (
                <button key={i} onClick={() => toggle(i)}
                  style={{background:bg,border:`2px solid ${border}`,borderRadius:8,padding:'12px 16px',textAlign:'left',cursor:submitted?'default':'pointer',color:txtColor,fontSize:14,fontFamily:"'Courier New', monospace",transition:'all 0.15s',display:'flex',alignItems:'center',gap:12}}>
                  <span style={{background:isSelected||(!submitted&&false)?color:'#334155',color:'white',borderRadius:4,padding:'2px 7px',fontSize:12,fontWeight:'bold',minWidth:22,textAlign:'center',flexShrink:0,background:submitted?(isRight?'#10b981':isSelected?'#ef4444':'#334155'):(isSelected?color:'#334155')}}>
                    {String.fromCharCode(65+i)}
                  </span>
                  {opt}
                  {submitted && isRight && <span style={{marginLeft:'auto',color:'#10b981'}}>✓</span>}
                  {submitted && isSelected && !isRight && <span style={{marginLeft:'auto',color:'#ef4444'}}>✗</span>}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div style={{marginTop:20,background:'#0f172a',borderRadius:8,padding:14,borderLeft:`3px solid ${color}`}}>
              <div style={{color:'#94a3b8',fontSize:13,fontWeight:'bold',marginBottom:4}}>💡 Explication</div>
              <div style={{color:'#cbd5e1',fontSize:13,lineHeight:1.6}}>{q.explanation}</div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{display:'flex',gap:12}}>
          {!submitted ? (
            <button onClick={handleSubmit} disabled={selected.length===0}
              style={{flex:1,background:selected.length>0?color:'#334155',color:'white',border:'none',borderRadius:8,padding:'14px',fontSize:15,cursor:selected.length>0?'pointer':'not-allowed',fontFamily:"'Courier New', monospace",fontWeight:'bold',transition:'background 0.2s'}}>
              Valider →
            </button>
          ) : (
            <button onClick={handleNext}
              style={{flex:1,background:color,color:'white',border:'none',borderRadius:8,padding:'14px',fontSize:15,cursor:'pointer',fontFamily:"'Courier New', monospace",fontWeight:'bold'}}>
              {current+1 >= filtered.length ? '🏁 Voir résultats' : 'Question suivante →'}
            </button>
          )}
          <button onClick={restart} style={{background:'#1e293b',color:'#94a3b8',border:'1px solid #334155',borderRadius:8,padding:'14px 20px',cursor:'pointer',fontFamily:"'Courier New', monospace",fontSize:13}}>
            ↺
          </button>
        </div>
      </div>
    </div>
  );
}