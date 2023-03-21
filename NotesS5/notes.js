/* SECTION 5: RENDERING LISTS & CONDITIONAL CONTENT

--Module Introduction--
We will learn  about:
- Rendering Lists & Conditional Content
- Working with Really Dynamic Content
- How we can output arrays of data on our page
- Outputting dynamic lists of content
- Rendering content under certain conditions

--Rendering Lists of Data--
- In most applications, we don't know in advance how many items we wanna render
- We want to render lists dynamically
- Executing dynamic exxpression within JSX code
- .map creates a new array based on another arrday and transforms every element in that array by taking a function which we pass as an argument, and that function is then executed for every item in the array
- If you had an array of JSX elements, react would render those elements side by side

CODING EXERCISE 9: RENDERING LISTS OF DATA

In the App component, you should transform the DUMMY_TODOS array that's provided to you (which must not be changed!) to a list of JSX elements (<Todo> elements to be precise). Every Todo component item must receive and output the todo text via a prop called text.

My App.js looks like:
import React from 'react';
import Todo from './Todo';
import './styles.css';
const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];
export default function App() {
  const todoItems = DUMMY_TODOS.map((todo, index) => (
    <Todo key={index} text={todo} />
  ));
  return (
    <ul>
      {todoItems}
    </ul>
  );
}

My Todo.js looks like:
import React from 'react';

export default function Todo(props){
    return <li>{props.text}</li>
}

--Using Stateful Lists--
- Just because you change some variable, does not mean React will automatically update the component
- To achieve that, you need to use state
- We can use the spread operator not just on objects, but also on arrays (not a react feature, just a standard js feature)

--Understanding "Keys"--
- React has a special concept when it comes to rendering lists of data that exists to ensure that React is able to update and render such lists efficiently without performance losses, or bugs, which may occur
- If an item flashes in the elements tab under developer tools, it means it was edited or updated by the browser
- Besides potential performance issues, we could also run into bugs if react is going through each div in our array and updated them
- React behaves like this because it currently check the length of the array and the number of items that are already rendered
- If you add a key to your component or HTML element then you can help React identify the individual items
- Always add a key when mapping out a list of items

ASSIGNMENT 3: TIME TO PRACTICE: WORKING WITH LISTS:
const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  added in Expenses.js
  

*/
