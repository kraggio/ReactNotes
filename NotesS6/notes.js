/*SECTION 6: STYLING REACT COMPONENTS

--Module Introduction--
Styling components
- Make your apps look good

We will lern about :
- how you can set up styles in a conditional and Dynamic way
- how you can switch styles based on certain conditions
- setting up styles so they only affect the component and are not added as global styles
- styled components which is a 3rd party library that allows us to set up pre styled components
- CSS Modules

--Setting Dynamic Inline Styles
CODING EXERCISE 11: DYNAMIC STYLES

Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.

The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.

Make sure that the button toggles between these two styles (color: white <=> color: red).

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p style={{color: highlighted ? 'red' : 'white'}}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

--Setting CSS Classes Dynamically--
CODING EXERCISE 12: DYNAMIC CSS CLASSES

Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app. This task is therefore very similar to the previous coding exercise but you're now going to set a CSS class dynamically - instead of an inline style.

The style should be applied as an CSS class (i.e., via the className attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the <p> element (this should also be the initial state).

Make sure that the button toggles between these two styles (no CSS class <=> active  CSS class).

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={highlighted ? 'active' : ''}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

--Introducing Styled Components--
--Styled Components & Dynamic Props--
--Styled Components & Media Queries-- 



*/
