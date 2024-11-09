import React, { useState } from 'react'

const ControllerComponents = () => {
    const[name,setName] = useState('')

    const handlechange = (event)=>{
        setName(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert(`A name was submitted ${name}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={handlechange} />
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default ControllerComponents
