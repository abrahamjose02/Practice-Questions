import { useEffect, useState } from "react"


const TimerComponent = () => {
  const[timer,setTimer] = useState(0)
  useEffect(()=>{
    const timeOutId = setInterval(()=>{
      setTimer(prevState=>prevState + 1)
    },1000)
    return ()=>{
      clearInterval(timeOutId)
    }
  },[])
  return (
    <div>
      <h1>Timer :{timer}</h1>
    </div>
  )
}

export default TimerComponent
