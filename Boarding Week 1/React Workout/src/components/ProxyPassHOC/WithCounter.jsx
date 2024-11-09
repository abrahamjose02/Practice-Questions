import React, { useState } from 'react'

const WithCounter = (WrappedComponent) => {

    return function WithCounter(props){

        const[counter,setCounter] = useState(0)

        const increment = () => setCounter(counter+1)
    
  return  <WrappedComponent counter={counter} increment={increment} {...props}/>
}
}

export default WithCounter
