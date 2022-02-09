import React,{useState, useEffect} from 'react';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';


export const ContainerButtons = () => {

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
      const prueba = document.getElementById('imgGame')
      if(counter<100){
          prueba.style.filter = 'opacity(100%)'
    }
    else{
          prueba.style.filter = "grayscale(90%)"
      }
    })

  return (<div>
      <p>{counter}</p>
      <ButtonUI OnClick={add} text="+"/>
      <ButtonUI OnClick={reset} text="Reset"/>
      <ButtonUI OnClick={substracting} text="-"/>
  </div>)
};
