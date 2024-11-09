import { useState } from "react"
import ChildCounter from "./ChildCounter"



const ParentCounter = () => {

    const[counter,setCounter] = useState(0)

    const updateCounter = (value)=>{
        setCounter((prevCounter)=>prevCounter + value)
    }
  return (
    <div>
        Count :{counter} 
      <ChildCounter onCounterChange = {updateCounter}/>
    </div>
  )
}

export default ParentCounter
