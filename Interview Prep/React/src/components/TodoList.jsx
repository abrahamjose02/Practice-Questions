import { useState } from "react"


const TodoList = () => {
    const[values,SetValues] = useState([])
    const[newValue,setNewValues] = useState('')
    const handleSubmit = () =>{
        SetValues([...values,newValue])
        setNewValues('')
    }
    const handleRemove =(index)=>{
        const updatedValues = values.filter((_,i)=> i !== index)
        SetValues(updatedValues)
    }
  return (
    <div>
      <input type="text" value={newValue} onChange={(e)=>setNewValues(e.target.value)} placeholder="Enter a New Value" />
      <button onClick={handleSubmit}>Add Button</button>
      <ul>
        {values.map((newVal,index)=>(
            <li key={index}>{newVal} <button onClick={()=>handleRemove(index)}>Remove</button></li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
