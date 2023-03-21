/* MODULE 7:DEBUGGING REACT APPS

--MODULE INTRODUCTION--
--UNDERSTANDING REACT ERROR MESSAGES--


CODING EXERCISE 13: FIX ERRORS

onclick and Div were changed to <div> and onClick

import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    return (
        <div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}


--ANALYZING CODE FLOW & WARNINGS--
--WORKING WITH BREAKPOINTS--
--USING THE REACT DEVTOOLS--


 */
