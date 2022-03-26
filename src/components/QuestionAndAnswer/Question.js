import React from 'react';

const Question = () => {
    return (
        <div className="questions container">
        <div className=' answer-1  mt-5'>
            <h3>How React Works?</h3>
            <h4><code>React is a very popular JavaScript library.React is a declarative and flexible JavaScript library for building user interfaces.Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</code></h4>
        </div>
        <div className="answer-2">
            <h3>How useState works?</h3>
            <h4 className='text-dark'><code>A React component using hooks is defined using the regular JavaScript function syntax, not the ES6 class syntax. Now that makes a lot of sense, considering that prior to React hooks, a React component defined as a function will have to be refactored to use the ES6 class syntax, in order to add say some piece of state or lifecycle methods to the component. With React hooks, that is no longer necessary, as functions can still remain functions while leveraging the good parts of React.</code></h4>
        </div>
        </div>
    );
};

export default Question;