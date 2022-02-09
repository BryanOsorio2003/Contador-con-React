import React,{ useState } from 'react';

export const ButtonUI = () => {

  const [counter, setCounter] = useState(0);

  const add = () =>{
    setCounter(counter +10)
  }

  const reset = () =>{
    setCounter(0)
  }

  const substracting = () =>{
    setCounter(counter -10)
  }

  return (
  <div>
      <p>{counter}</p>
      <button onClick={add}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={substracting}>-</button>
  </div>
)
};
