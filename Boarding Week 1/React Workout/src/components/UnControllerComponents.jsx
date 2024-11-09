import React, { useRef } from 'react'

const UnControllerComponents = () => {
    const inputRef = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`A name was submitted :${inputRef.current.value}`)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" ref={inputRef} placeholder='Enter a name' />
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UnControllerComponents
