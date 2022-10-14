import React from 'react'
import style from './style.module.scss'

export function Counter({count}) {
  let countClassName = {};
  if (count > 0) countClassName = 'countTrue';
    else if (count < 0) countClassName = 'countFalse';

  return (
    <div className={style.counter}>
      <h1 className={style.counterTitle}>
        Counter now is: <span className={style[countClassName]}>{count}</span>
      </h1>
    </div>
  );
}