import React, { useRef } from 'react'
import CustomInput from './CustomInput'

const ParentRef = () => {
    const inputRef = useRef(null)

    const focusInput = () =>{
        console.log(inputRef.current.value)
        
    }
  return (
    <div>
        <h2>Forward Ref</h2>
      <CustomInput label="Enter Text" ref={inputRef}/>
      <button onClick={focusInput}>Focus input</button>
    </div>
  )
}

export default ParentRef
