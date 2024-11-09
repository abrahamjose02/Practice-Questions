import React, { forwardRef } from 'react'

const CustomInput = forwardRef((props,ref) => {
  return (
    <div>
      <label>{props.label}</label>
        <input type="text" ref={ref} />
    </div>
  )
})

export default CustomInput
