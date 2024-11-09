import React from 'react'

const DisplayCounter = ({label,counter,increment}) => {
  return (
    <div>
      <h2>{label}</h2>
      <p>Counter value:{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default DisplayCounter
