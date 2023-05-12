import React from 'react';
import'./Fooder.css'

const Fooder = () => {
    return (
        <div>
            <div className="container">
                <div className="question-area">
                    <h2>How does React work?</h2>
                     <p><strong>Ans:</strong> React is without a doubt one of the most powerful and flexible frontend frameworks. But with its great power comes great responsibility – it’s 
                    easy to misuse it and create a mess of an app. To avoid it, one needs to really understand how React works internally by studying its code implementation and structure.
                    Coincidentally, it is also one of the best ways to learn React in general. Let’s do this today!
                    </p>
                </div>
                <div className="question-area">
                    <h2>props and state difference?</h2>
                  <p> <strong>Ans:</strong><strong>State</strong>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. 
                        It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                        <strong>Props</strong>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function.Props are immutable so we cannot modify the props from inside the component
                 </p>
                </div>
                <div className="question-area">
                 <h2>How to load data without usieffect api?</h2>
                  <p> <strong>Ans:</strong> I have run into a small problem while developing a dialog component that asynchronously fetches some data from an API endpoint every time it is opened, which in my case was generating a fresh code.The issue that I spent some time thinking about was the number of re-renders that were occurring, due to the way it was implemented. Here is a minimal reproducible example of the type of thing I was aiming to achieve </p>
                </div>
            </div>
            
        </div>
    );
};

export default Fooder;