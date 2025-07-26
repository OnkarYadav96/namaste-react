import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../utils/reducerSlice";

export const Counter = () => {
  // Get the current count value from the CounterSlice
  const currentCounterValue = useSelector((store) => store.count.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>counter: {currentCounterValue}</div>
      <button
        onClick={() => {
          dispatch(increment(2));
        }}
      >
        Increment +
      </button>
      <button
        onClick={() => {
          dispatch(decrement(2));
        }}
      >
        Decrement -
      </button>
    </>
  );
};

// src/features/counter/Counter.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../utils/counterSlice';

// function Counter() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;
