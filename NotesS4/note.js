/*SECTION 4: React State & Working with Events

--Module Introduction--
We will learn about:
Handling events
Updating the UI & Working with State
A closer look at components & State

--Listening to Events & Working with Event Handlers--
- On all built in HTML elements(like <div> and <h2>), we have full access to native DOM events that we can listen to
- For all default events, there's a prop equivalent in React
- In React we add an event listener by going to JSX element and add a prop
- React exposes all default events as props which start with "on"
- All the on props want a function passed as a value
- If an element supports an event then you, then you can add a listener with React, then point at a function defined inline or upfront
- Ending in "Handler" is better practice to attatch to event handler functions to define that it is a function not being called by us, but eventually by React when it is called

CODING EXERCISE 5: LISTENING TO EVENTS
Your task is to "connect" a click event listener to an already existing button and output "Stored!" via console.log(). 

export default function App(){
    const clickHandler = () => {
        console.log('Stored!');
};
return <button onClick = {clickHandler} > Bookmark </button>;
}

--How Component Functions are Executed--
- Your component is a function, the only special thing about it is that it has JSX
- By using our components in JSX code, we make react aware of our components function
- React then calls any functions those components might have stored
- It does this until there is no more component code left to call, then it evaluates the overall result and translates that into DOM instructions

--Working with "State"--
- State is not react specific, but it is a key concept
- If you have a variable in component function and it changes, React ignores it 
- The overall component function does not run again just because something is updated
- React will only run the component function once, and then it will use the updated state to determine what to do next
- 'Named import' like useState allows us to define values as state where changes to these values should reflect in the component functions being called again
- 'hooks' start with 'use' and must be called directly inside component functions
- useState wants a default function value
- array destructuring
- useState always returns an array with 2 values. The first element is the current state value and the second element is a function for updating that
- The component function in which you ccalled the state updating function will be executed again

CODING EXERCISE 6: WORKING WITH "STATE"
Your task is to add an event listener to listen for clicks on the button that's already included in the App component.
Upon a button click, the price should change from $100 to $75.
Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

export default function App(props) {
    const [price, setPrice] = React.useState(props.price);
    const clickHandler = () => {
        setPrice("$75");
    };
    return (
        <div>
            <p>$100 {price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}

This is what I did. Udemy says it is correct, however the $100 value stays even after clicking the button. I will continue to watch and try to trouble shoot this later once I have more practice using "state"

--A closer look at "Use State" Hook--
- The useState function is a hook that is called inside component functions.
- useState registers some value as a state for a specific component instance that is being called
- By calling useState we tell React that it shold manage some value for us 

--State Can be Updated in Many ways--
- we update our state upon user events (i.e upon a click)
- the above is common but not required
- you can update state for whatever reason

--Working with Multiple States-- 
- You can have separate states that can be updated and managed separately
- You will often have multiple states that need to be managed

--Using One state instead(And what's better)--
- If you go for the one state approach, it is your responsibility to make sure data doesn't get lost
- you'll need to manually copy in other values

--Updating State that Depends on the Previous State--
- We depend on the previous state snapshot to copy in the existing values and then override one value with a new one
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

CODING EXERCISE 7: USING STATE WITH FORM INPUTS
If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.

To achieve this result, you should store the current message validity (e.g., the string "Invalid" or "Valid") in some state value. That state value must be updated every time the input value changes. You therefore must add a fitting event listener that triggers the code that updates the state.
To derive the proper state value (i.e., whether it should be "Invalid" or "Valid"), you could use this if-condition:
if (value.trim().length < 3) {
 // Todo: Update state to say "Invalid"
} else {
 // Todo: Update state to say "Valid"
}
Of course, you must also output the state value as part of the App component's JSX code so that either "Invalid message" or "Valid message" is displayed.

import React, { useState } from 'react';
import './styles.css';
// don't change the Component name "App"
export default function App() {
  const [message, setMessage] = React.useState('');
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <form>
      <label>Your message</label>
      <input type="text" value={message} onChange={handleMessageChange} />
      {message.length >= 3 ? <p>Valid message</p> : <p>Invalid message</p>}
    </form>
  );
}

By doing this, as you type the text below will let you know if your message meets the requirements to be valid or not

CODING EXERCISE 8: UPDATING STATE BASED ON OLDER STATE

import React, { useState } from 'react';
import './styles.css';
//don't change the component name "App"
export default function App() {
  const [counter, setCounter] = React.useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

--Handling Form Submission--
- If a button is pressed instead of a form, the overall form element will emit an event to which we can listen
- event.preventDefault(); javascript behavior

--Adding two-way binding--
- for inputs, we don't just listen to changes, but we can also pass a new value back into the input so that we can reset or change the input programatically by adding the value attribute to the input element
- Useful with forms because it allows you to gather user input and also change it

--Child-to-parent Component Communication (Bottom-Up)--
- How we can pass data up
- We can create our own event props and can expect functions as values which would allow us to pass a function from a parent to child component and thgen call function inside child component
- And when calling a function, we can then pass data to the function as a parameter
- This is called "Propagation"
- Props can only be passed from parent to child
- This is how you can make sure a child component can communicate up to a parent component
- The trick is we pass around a pointer at a function

--Lifting the State Up--
- In our example app <NewExpense> has Data/state generated in it, and Data/State is needed in <Expenses> (there is no direct connection between these two children components)
- We utilize the closest parent component that has direct or indirect access to both children components
- By passing our generated state data from the new expense to the app component, we're "lifting the state up"
- We're doing this using props to call our function and passing data to the function and lifting that data up to the app component

ASSIGNMENT 2: TIME TO PRACTICE: WORKING WITH EVENTS AND STATE
(this assignment was done via editing the application directly. Refer to ./Expenses/ExpensesFilter.js)

--Controlled vs uncontrolled components & stateless vs stateful components--
- Controlled components are ones that are controlled by the parent component
- Whenever you use two-way binding, you are contolling a component
- Stateless components are ones that are not controlled by the parent component
- Presentational vs stateless components
- In all react app you build, you will have a couple of components that manage some state
- We will have a lot more stateless components since we want to split into small reusable building blocks

QUIZ 2: LEARNING CHECK: WORKING WITH EVENTS AND STATES

*/
