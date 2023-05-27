import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold p-6">Answer to the <span className="text-green-700">Question?</span></h1>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-md text-left shadow-lg border-2">
                    <h1 className="text-2xl py-6 font-bold">How to work useState & useEffect in react?</h1>
                    <h1><span className="font-bold">useState</span> useState is a hook in React that allows you to add state to functional components. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update the state value. Here's how to use useState in React. <br />
                        <span className="font-bold">useEffect:</span> When we are working outside from componets It's called side effect. Then need to re-render. useEffect recive two pramiter first a function and second a dependence. When need value changed then need to re-render. useEffect help to re-render updated value basd on dependece value. useEffect re-render when useEffect value was changed.</h1>
                </div>
                <div className="p-6 rounded-md text-left shadow-lg border-2">
                    <h1 className="text-2xl py-4 font-bold">Props vs State?</h1>
                    <h1><span className="font-bold">Props</span> Props (short for properties) are passed from a parent component to a child component as an input parameter. They are read-only and cannot be modified by the child component. They are used to communicate data and behavior down the component hierarchy. <br />
                        <span className="font-bold">State </span> State is a data structure that is managed within a component. It can be modified by the component itself and its child components. State allows a component to keep track of its internal data and update its output when it changes. State is initialized in the constructor of a component.
                    </h1>
                </div>
                <div className="p-6 rounded-md text-left shadow-lg border-2">
                    <h1 className="text-2xl py-4 font-bold">What is the difference between props and state in react?</h1>
                    <h1><span className="font-bold">Props vs state:</span> <br />
                        <span className="font-bold">props:</span> Props make components reusable. We cannot modified props. Props We can only read. Using props we can send data one component ot other componets. Props are immutable. <br />
                        <span className="font-bold">State:</span> We cannot modified corrent data but we can set new data in state. state provide a function to set new data. State is mutable. State cannot make components reusable.</h1>
                </div>
                <div className="p-6 rounded-md text-left shadow-lg border-2">
                    <h1 className="text-2xl py-4 font-bold">How Should I Start to learn web development?</h1>
                    <h1><span className="font-bold">Learn the basics of HTML, CSS, and JavaScript:</span> HTML provides the structure of a webpage, CSS is used for styling, and JavaScript is used for adding interactivity to the page. There are many free online resources for learning these basics, including W3Schools and Mozilla Developer Network. <br />
                    <span className="font-bold">Choose a front-end framework or library:</span> Frameworks and libraries like React, Vue, and Angular can make front-end development easier and more efficient. Research and choose one that suits your needs and interests. <br />
                    <span className="font-bold">Learn a back-end language:</span> Back-end development is responsible for handling server-side logic and databases. Popular languages for back-end development include Python, Ruby, and Node.js.</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Question;