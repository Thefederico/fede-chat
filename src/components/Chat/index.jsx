/* eslint-disable multiline-ternary */
import React from 'react'
import { useParams } from 'react-router-dom'
import Message from '../Message'
import { MdSend } from 'react-icons/md'
import useChat from '../../hooks/useChat'

import styles from './styles.module.css'

function Chat () {
  const { id } = useParams()
  const { messages, sendMessage } = useChat(id)

  const handleSubmit = event => {
    event.preventDefault()
    sendMessage(event.target.myMessage.value)
  }

  return (
    <section className={styles.chat}>
      <header className={styles.header}>
        <p>Chat with id {id}</p>
      </header>
      <ol className={styles.messages}>
        {messages.length === 0 ? (
          <>
            <Message
              text='Your chat start here 👇🏻'
              hour={`${new Date().getHours()}:${new Date().getMinutes()}`}
              sender
            />
            <Message
              text='Send your first message 💬'
              hour={`${new Date().getHours()}:${new Date().getMinutes()}`}
              sender={false}
            />
          </>
        ) : (
          messages.map((message, index) => <Message key={index} {...message} />)
        )}
      </ol>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' name='myMessage' placeholder='Write a message...' />
        <button type='submit'>
          <MdSend />
        </button>
      </form>
    </section>
  )
}

export default Chat
