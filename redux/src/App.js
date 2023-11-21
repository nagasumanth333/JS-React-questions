// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./utils/counterSlice";
import { setUser } from "./utils/userSlice";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div>
        <h2>User Information</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <button
          onClick={() =>
            dispatch(setUser({ username: "John", email: "john@example.com" }))
          }
        >
          Set User
        </button>
      </div>
    </div>
  );
};

export default App;
