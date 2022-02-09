import React,{ useState, useEffect } from 'react';
import { Image } from '../Image/Image';

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

  useEffect(()=>{
    if(counter>=30){
      const prueba = document.getElementById('imgGame')
      prueba.style.filter = "grayscale(90%)"
    }
  })
  

  return (
  <div>
      <p id='pe'>{counter}</p>
      <button onClick={add}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={substracting}>-</button>
  </div>
)
};
