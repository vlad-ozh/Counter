import React from 'react'
import './style.css'

export function CounterForm(props) {
  return (
    <form className="counterBoxForm" onSubmit={e => e.preventDefault()}>
      <button onClick={props.onIncrement}>increment</button>
      <button onClick={props.onDecrement}>decrement</button>
    </form>
  );
}