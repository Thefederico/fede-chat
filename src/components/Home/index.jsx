import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

function Home () {
  const [id, setId] = useState('')

  const handleChange = e => {
    setId(e.target.value)
  }

  return (
    <main className={styles.home}>
      <div className={styles.information}>
        <h1>Secret lovers chat</h1>
        <p>Share the best conversations with your secret lover</p>
        <input type='text' placeholder='Write a id' onChange={handleChange} />
        <Link to={`/chat/${id}`}>
          <button>Go to chat</button>
        </Link>
      </div>
    </main>
  )
}

export default Home
