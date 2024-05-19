/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'


function App() {

  let [counter , setCounter] = useState(0);

  //let counter =5

  const addValue = () =>{
   // counter = counter +1;
    if(counter < 20){
      const newCounter = counter+1;
      console.log("Value Added", newCounter);
      setCounter(newCounter);
    }
    else{
      console.log("Maxmum value reached");
    }
    
  }

  const removeValue = () =>{
    //counter = counter-1;
    if(counter> 0){
      const newCounter = counter -1;
      console.log("Value Removed", newCounter);
      setCounter(newCounter);
    }
    else{
      console.log("Minimum Value Reached");
    }
  }
 
  return (
    <>
      <h1>CODE KAREN</h1>
      <h2>Counter value: {counter}</h2>
      <h2></h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>

      <footer>Footer:{counter}</footer>
    </>
  )
}

export default App
