import { useEffect } from "react"
import { useState } from "react"


const Button = () => {
   const[isDark,setIsDark] = useState(false)
   
   useEffect(()=>{
    document.body.style.backgroundColor = isDark ? "#333" : '#fff'
   })

   const  handleToggle = ()=>{
    setIsDark((prevState)=> !prevState)
   }
  return (
    <div>
     <button onClick={handleToggle}>{isDark ? 'Dark' : 'White'}</button>
    </div>
  )
}

export default Button
