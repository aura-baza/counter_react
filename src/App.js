import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import { useState } from 'react';
function App() {
  let [counter,setCounter]=useState(0);
  const handlerClick=()=>{
   setCounter(counter+1);
  };
  const handlerClickD=()=>{
   setCounter(counter-1);
  };
  const restartCounter=()=>{
   setCounter(0);
  };
  return (
    <div className="App">
      <div className="container_counter">
        <Counter counter={counter} />
       <div className="container_btns">
       <Button text={'INCREMENTAR'} isButtonClick={true} handlerClick={handlerClick} />
        <Button text={'DECREMENTAR'} isButtonClick={false} handlerClick={handlerClickD} />
        <Button text={'REINICIAR'} isButtonClick={false} handlerClick={restartCounter} />
       </div>
      </div>
    </div>
  );
}

export default App;
