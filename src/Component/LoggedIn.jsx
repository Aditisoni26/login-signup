import React from 'react'

export default function LoggedIn({onLogout}) {
  return (
    <div>
      <h2>Hello, you have logged in</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
