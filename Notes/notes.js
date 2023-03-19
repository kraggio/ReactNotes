/* SECTION 1:Getting Started
--- What is React? ---

-A JavaScript library for building user interfaces 
EX: include Netlix interface
Mobile Apps give highly reactive user experience

--- Why do we need React? How can it help us in addition to JS? ---

- Traditionally, websites had request to the server, and a new HTML page was sent back. Request and response cycle.
- JavaScript can manipulate the HTML structure (DOM) of the page
- No (visible) request to the server required, no need to wait for a new HTML page as a response
- React is a client-side Javascript library
- Is all about building modern, reactive user interfaces for the web

--- Building Single-Page Applicactions ---

SPA - Single Page Application
React can be used to control parts of HTML pages or entire pages
"widget" approach on a multi-page-application(Some) pages are still rendered on and served by a backend server
React can also be used to control the entire frontend of a web application
"Single-Page-Application"(SPA) approach. Server only sends one HTML page, thereafter, React takes over & controls the UI

--- Exploring React.js Alternatives (Angular/Vue) ---

React.js is a... Lean and focused component-based UI library. Certain features (ex:routing) are added via community packages

Angular ... Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects

Vue.js ... Complete component-based UI framework, includes most core features. A bit less popular than React & Angular
*/

/* SECTION 2: JavaScript Refresher
Coding Exercise 1:

Exercise: Array Methods
Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
*/

// function transformToObjects(numberArray) {
//   const objectArray = numberArray.map((num) => ({ val: num }));
//   return objectArray;
// }
// console.log({ val: 1 }, { val: 2 }, { val: 3 });

/* SECTION 3: React Basics & Working with Components

--Module Intro--
Will learn about :
- React Core Styntax & JSX
- Working with components
- Working with data
- Will build an expense tracker and learn about key concepts to know when working with react

What are Components and why is React all about them

--React is all about components because...---
- All user interfaces in the end are made up of components
- Componenets are reusable building blocks in your user interface
- Components are a combination of html, CSS, and JavaScript
- All UI's can be split up into components

--Why components in React--
- Reusability (No repeating yourself)
- Separation of Concerns (Don't do too many things in one and the same place (function))
- Smaller piees of code easier to manage and maintain
- Split big chunks of code into multiple smaller functions (React picks up this concept and translate it into the front facing side of the User Interface)

React code is written in a "Declarative Way"!

--How a component is built--
- When we work with React, and we build components, we comibne HTML, CSS, Javascript, and components together to create the User Interface

- React allows the creation of re-usable and reactive components
- React uses a declarative approach to for building components

--Declarative Approach--
-Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions

-- Creating a new project --

- Create react app simplifies development process
npx create-react-app my-app
*/
