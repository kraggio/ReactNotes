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

- React code is basically just JavaScript code

--Introducing JSX--
- JSX stands for JavaScript XML
- HTML code in JavaScript
- Only works because of transformation steps behind the scene that transform the js code to more browser friendly code
- Can find this transformed code when inspecting the app

--How React Works--
- Building our own custom HTML elements with the declarativve approach

 // const para = document.createElement("p");
  // para.textContext = "This is also visible";
  // document.getElementById("root").append(para); 
  //above is how it would be done using js, called imperative

  Coding Exercise 2: Working with JSX Code

Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.

import React from 'react';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <p>Practicing React...</p>
            <h1>Exercise done!</h1>
        </div>
    );
}
For this challenge, by adding the <h1> HTML element within the <div>, this exercises the use of JSX. 

--Building a First Custom Component--
- With React, we build a component tree. With App at the top
- Only the top most component is rendered into the UI
- A component in React is just a special kind of JavaScript function

Coding Exercise 3: Building a first Component

Your task is to build a custom <ExerciseComponent /> that outputs the text "First exercise - done!" on the screen.

My App.js looked like...
import React from 'react';
import MyCmp from './ExerciseComponent'

// don't change the Component name "App"
export default function App() {
    return <MyCmp></MyCmp>;
}

My ExerciseComponet.js looked like...
import React from 'react';
// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!

export default function MyCmp() {
    return <h2>First exercise - done!</h2>
}

Upon doing this exercise, I was intitially confused with the 'export default function App(){...} but once I read the instructions further I was able to figure it out

--Writing more complex JSX Code--
function ExpenseItem() {
  return <div>Date</div><div>Title</div><div>Amount</div>;
}

- This does not work because you can only have one root element per return statement. 

- className used when working with css within React, since class is specific to javascript

- For the most part, hard code is unrealistic (especially for our App)

--Passing Data via "props"--

- We can make components reusable by using parameters and props.
- Components can't just use data stored in other components, but we can pass data to the custom component by adding an attribute
- Props stand for properties


Coding Exercise 4: Passing Data via "props"

My App.js looked like...
// don't change the Component name "App"
export default function App() {
    const products = [
        {
            id: "e1",
            title: "Product 1",
            price: "10",
            description: "First product",
        },
        {
            id: "e2",
            title: "Product 2",
            price: "20",
            description: "Second product",
        },
    ];
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product 
            title={products[0].title}
            price={products[0].price}
            description={products[0].description}
            />
            <Product
            title={products[1].title}
            price={products[1].price}
            description={products[1].description}
            />
        </div>
    );
}


My Product.js looked like...
import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}


With this challenge I got stuck, but only because I forgot to change the index number for the second set of data. Once I figured it out, everything worked as expected

--Splitting Components Into Multiple Components--
- As projects develop, your components get bigger, since we're adding more and more JSX logic to them
- This is why React uses component concepts which allows us to split our app into separate building blocks
- These building blocks allow us to keep our components and code base small and manageable while being able to complete a complex UI
- The bigger your application gets and components become, the more you want to look into splitting them up
- Props are our way to pass data from component A to B

--The concept of "Composition(children props)"---
- "Card" is known widely in web development
- Reusable wrapper content using children props and components
- Allows to save from code duplication
- Keeps components clean
- Components and elements together
- Composition is important
- Whenever you combine componenets, you are using composition

--First Summary--
- You build UI by building and combining components
- Sharing data across components through props
- With building components, we are splitting up our code across multiple files and building blocks
- Every custom component you build either uses other components or built HTML in elements

--A closer look at JSX--
- JSX is a way to build HTML in React
- In a lot of other React projects, react imports are used(this was needed to be imported in all files where JSX was used in the past) But not needed now
- JSX code is syntactic sugar!
- Wrapper is needed because in the createElement world you create one element that can have "child" elements

--An Alternative Function Syntax--
Using arrow functions also is an alternative to functions
EX:
const example = (ex) => {
    return ();
}

--Quiz from Section 3--
I only got this question wrong:

How can you output data in React components (i.e in he returned JSX code)?

I chose: "React has a special syntax that allows you to output variable values (i.e values stored in variables) and nothing else: Opening & closing curly braces."
I missed the wording of 'Nothing Else' changing the context of the answer. 

The correct answer was:
"You can use single curlly braces(opening and closing with any JS expression between them."

This is the conclusion of Sections 1-3
Overall my biggest struggle was the assignment in which we created our own components in a new file, however only because I did not want to break the code. I will continue to get comfortable with being okay with errors, and troubleshooting them.
*/
