
// useMemo example -


function FactorialComponent({ number }) {
    const factorial = useMemo(() => {
      console.log('Calculating factorial...');
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
      return result;
    }, [number]);
  
    return (
      <div>
        <p>Factorial of {number} is {factorial}</p>
      </div>
    );
  }



// useCallback example - 


import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('Child component re-rendered');
  return <button onClick={onClick}>Increment Count</button>;
}




// useReducer example - 


import React, { useReducer } from 'react';

// Reducer function: It takes the current state and an action, and returns the new state.
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Initial state
const initialState = { count: 0 };

// Component using useReducer
function Counter() {
  // useReducer returns the current state and a dispatch function to dispatch actions
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Counter;