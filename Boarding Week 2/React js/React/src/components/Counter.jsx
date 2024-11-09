import React from 'react'
import useCounter from './CustomHook'

const Counter = () => {
    const {count,increment,decrement,resetValue} = useCounter(0)
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>Count : {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetValue}>Reset Value</button>
    </div>
  )
}

export default Counter
