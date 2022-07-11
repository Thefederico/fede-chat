import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'

const NEW_CHAT_MESSAGE = 'newMessage'
const SOCKET_SERVER = 'http://192.168.0.103:3001'

function useChat (chatId) {
  const [messages, setMeassages] = useState([])
  const socketReft = useRef()

  useEffect(() => {
    socketReft.current = socketIOClient(SOCKET_SERVER, {
      query: { chatId }
    })

    socketReft.current.on(NEW_CHAT_MESSAGE, (message) => {
      const incomingMessage = {
        ...message,
        sender: message.senderId === socketReft.current.id
      }

      setMeassages((prevState) => [...prevState, incomingMessage])
    })

    return () => {
      socketReft.current.disconnect()
    }
  }, [chatId])

  const sendMessage = (messageBody) => {
    socketReft.current.emit(NEW_CHAT_MESSAGE, {
      text: messageBody,
      senderId: socketReft.current.id,
      hour: `${new Date().getHours()}:${new Date().getMinutes()}`
    })
  }

  return { messages, sendMessage }
}

export default useChat
