import React, { useState } from 'react';
import { CounterForm, Counter, Clock } from '..';
import style from './App.module.scss';

export function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={style.App}>
      <div className={style.container}>
        <div className={style.counterBox}>
          <Clock />
          <h1 className={style.counterBoxTitle}>Counter Form</h1>
          <CounterForm
            onIncrement={() => setCounter(counter + 1)}
            onDecrement={() => setCounter(counter - 1)}
          />
          <Counter count={counter} />
        </div>
      </div>
    </div>
  );
}
