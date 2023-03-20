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

--Listening to User Input-- 

*/
