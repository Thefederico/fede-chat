import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home () {
  const [id, setId] = useState('')

  const handleChange = e => {
    setId(e.target.value)
  }

  return (
    <main>
      <h1>FedeChat</h1>
      <input type='text' placeholder='Write a id' onChange={handleChange} />
      <Link to={`/chat/${id}`}>
        <button>Go to chat</button>
      </Link>
    </main>
  )
}

export default Home
