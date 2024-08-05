import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mainpage() {
  const navigate = useNavigate()

  const goToChat = () => {
    navigate('/chat')
  }
	
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={goToChat}>Go to Chat</button>
    </div>
  )
}

export default Mainpage
