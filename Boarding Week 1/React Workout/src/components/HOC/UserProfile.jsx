import React from 'react'
import WithLogger from './WithLogger'

const UserProfile = ({name,age}) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name :{name}</p>
      <p>Age :{age}</p>
    </div>
  )
}

export default WithLogger(UserProfile)
