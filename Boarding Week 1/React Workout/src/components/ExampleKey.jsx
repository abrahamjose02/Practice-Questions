import React, { useState } from 'react';

const NameList = () => {

    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];

    const [selectedName,setSelectedName] = useState('')

    const pickName = (name)=>{
        setSelectedName(name)
    }
  
  return (
   <div>
    <h1>You have Picked the name :</h1>
    <ul>
        {names.map((name,index)=>(
            <li key={index}>
                <button onClick={()=>pickName(name)}>{name}</button>
            </li>
        ))}
    </ul>
    {selectedName && <h2>You selected :{selectedName}</h2>  }
   </div>
  );
};

export default NameList;
