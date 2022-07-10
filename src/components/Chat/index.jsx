import React from 'react'
import { useParams } from 'react-router-dom'
import Message from '../Message'

function Chat () {
  const { id } = useParams()

  return (
    <div>
      <p>Chat with id {id}</p>
      <ol>
        <Message text='Hello' hour='12:00' sender />
        <Message text='Hello 2' hour='12:01' sender={false} />
      </ol>
    </div>

  )
}

export default Chat
