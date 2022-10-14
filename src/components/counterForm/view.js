import React from 'react'
import style from './style.module.scss'

export function CounterForm(props) {
  return (
    <form className={style.counterBoxForm} onSubmit={e => e.preventDefault()}>
      <button onClick={props.onIncrement}>increment</button>
      <button onClick={props.onDecrement}>decrement</button>
    </form>
  );
}