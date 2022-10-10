import React, {useState} from 'react'
import {
  CounterForm,
  Counter,
  Clock,
} from './components'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <div className="counterBox">
          <Clock />
          <h1 className="counterBoxTitle">Counter Form</h1>
          <CounterForm 
            onIncrement={() => setCounter(counter + 1)}
            onDecrement={() => setCounter(counter - 1)} 
          />
          <Counter count={counter}/>
        </div>
      </div>
    </div>
  );
}

export default App;
