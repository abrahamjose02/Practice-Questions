import React, { useState } from 'react'

const useCounter = (initialValue) => {
    const[count,setCount] = useState(initialValue)

    const increment = () => setCount(prevCount => prevCount + 1)
    const decrement = () =>{
        if(count>0){
            setCount(prevCount => prevCount - 1)
        }
    }
    const resetValue = () => setCount(initialValue)
  return {count,increment,decrement,resetValue}
}

export default useCounter
