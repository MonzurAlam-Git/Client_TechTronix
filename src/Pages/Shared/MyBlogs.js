import React from 'react';

const MyBlogs = () => {
    return (
        <div>
            <h1>Q/A</h1>
            {/* Question -1 */}
            <h1 className="text-red-500 font-bold">How will you improve the performance of a React Application?</h1>
            <p>There are several ways to improve the performance of a React application, some of which include:

                Minimizing the number of components: Use fewer components in the application to decrease the amount of work the browser has to do.

                Using the React.memo() HOC: This HOC allows you to wrap a component and only re-render it if its props have changed.

                Using the useEffect() hook: This hook allows you to perform side effects, such as fetching data, after the component has rendered.</p>
            {/* Question -2 */}
            <h1 className="text-red-500 font-bold">How will you improve the performance of a React Application?</h1>
            <p>There are several ways to manage state in a React application, including:

                Using the useState() hook: This hook allows you to add state to functional components. It returns an array with two items: the current state value and a function to update the state.

                Using the useReducer() hook: This hook allows you to manage complex state and state transitions in a functional component. It's similar to the useState() hook, but it also allows you to specify a reducer function that determines how the state should be updated based on the current state and an action.

                Using the useContext() hook: This hook allows you to share state across multiple components without passing props down through every level of the component tree.</p>
            {/* Question -3 */}
            <h1 className="text-red-500 font-bold">How does prototypical inheritance work?</h1>
            <p>Prototypical inheritance is a mechanism in javascript that allows objects to inherit properties and methods from other objects by following the prototype chain, which is a chain of linked objects. The chain starts with the object and goes up to its prototype object and it's prototype object and so on until the end of the chain is reached.</p>
            {/* Question -4 */}
            <h1 className="text-red-500 font-bold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>

            <p>using the setState() method or hooks like useState() and useReducer() to update the state, React can keep track of changes and efficiently update the virtual DOM and re-render the component, and it also allows the framework to optimize the performance by batching multiple state updates.</p>
            {/* Question -5 */}
            <h1 className="text-red-500 font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

            <p>Create an input field for the user to enter their search query.

                On every change of the input field, update the state of the search query.

                Using the useEffect() hook, listen to changes on the search query and filter the products array.

                Use the filter() method to return only the products whose name includes the search query.</p>
            {/* Question -5 */}
            <h1 className="text-red-500 font-bold">What is a unit test? Why should write unit tests?</h1>

            <p>A unit test is a type of software testing that verifies that a small and specific piece of code (a "unit") is working correctly. A unit is typically a single function or method, but it can be a larger piece of code that consists of multiple functions or methods.
                There are many reasons why you should write unit tests, here are a few:

                They help you catch bugs early: Unit tests help you catch bugs early in the development process, which makes them easier and less expensive to fix.

                They help you ensure that code changes don't break existing functionality: When you make changes to your code, unit tests help you ensure that the changes don't break existing functionality.

                They make it easier to refactor code: Unit tests provide a safety net that makes it easier to refactor code without introducing new bugs.



            </p>


        </div>
    );
};

export default MyBlogs;
