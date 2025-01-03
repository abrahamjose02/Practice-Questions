import React, { useState } from 'react'

const UseMemoCounter = () => {
    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = () =>{
        let i=0;
        while(i<200000) i++
        return counterOne % 2 === 0
    }
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" :"Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two -{counterTwo}</button>
      </div>
    </div>

  )
}

export default UseMemoCounter
