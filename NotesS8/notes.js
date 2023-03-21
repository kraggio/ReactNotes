/* SECTION 8: A COMPLETE PRACTICE PROJECT
--MODULE INTRODUCTION--
--ADDING A "USER COMPONENT"--
- 

--ADDING A RE-USABLE "CARD" COMPONENT--
- In Add User, we want to wrap our form in a Card component, which applies a styling to the form
- We then created our Card.js and got to creating Card, which gets props.
- We export this as our component(export default...)
- If you're not careful, creating the card component can get a little tricky
- Lets say we want to return a div as we did with our User Form App, and inside this div, we want to output the content that the Card component is wrapped around (as we did with form)
- Remember that the Card component should output what's passed between the opening and closing tags
- After this, we're going to access our content using props (like we did w props.children)
- Also remember we're putting props in the curly braces because this is just javascript, not JSX
- We then want to assign this newly created div a className so that we can style this information
- We used css modules to specify our card styles
- Once we add styling to our css page, and import it into our card.js, all we have left to do is to go to our 
AddUser component in AddUser.js, and import it in here
- Now that we've added tthis into our AddUser.js, we want to create a css file for it and add our styles
- make the necessary imports for css
- We then go to our card component and add the necessary className
- Note that Card is our custom component meaning it only is able to work with the props we use inside of that component meaning originally our component doesn't know what to do with this classname prop that was used
- So we then go back to Card.js which is holding our component and make sure that we accept an incoming classname prop and that we do something with it (classes.card)
- we want to make sure that the css claasses applied to the div apply to the card classes we've already applied, along with any potential incoming classes
- This works by adding a template literal as a value for classname within the div, then inject classes.card dynamically with the $ sign.
- we then inject the second value, props.className
- we can now set className on our own component, because we're accpeting and using the class name props inside of the component
- if we were to use something like "css class" we would then have to go in and change it in our AddUser component as well
- we use classname because that's what React uses 
- This is what in turn, is what's allowing our Card to be reusable



--ADDING A RE-USABLE "BUTTON" COMPONENT--
--MANAGING THE USER INPUT STATE--
--ADDING VALIDATION & RESETTING LOGIC--
--ADDING A USERS LIST COMPONENT--
--MANAGING A LIST OF USERS VIA STATE--
--ADDING THE "ErrorModal" COMPONENT--
--MANAGING THE ERROR STATE--

*/
