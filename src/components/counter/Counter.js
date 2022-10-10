import React from 'react'
import './style.css'

export function Counter({count}) {
  let countClassName = '';
  if (count > 0) countClassName = 'countTrue';
    else if (count < 0) countClassName = 'countFalse';

  return (
    <div className="counter">
      <h1 className='counterTitle'>
        Counter now is: <span className={countClassName}>{count}</span>
      </h1>
    </div>
  );
}