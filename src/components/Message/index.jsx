import React from 'react'

function Message ({ text, hour, sender = false }) {
  return (
    <li className={sender ? 'sender' : 'receiver'}>
      <p>{text}</p>
      <span>{hour}</span>
    </li>
  )
}

export default Message
