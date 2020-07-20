import React from 'react'

import './ChatMessage.css'


const ChatMessage = ({ message, messageType }) => {
    return (
    <div className={messageType} >
        <div className='username'>{message.user.username}</div>
        <div className='msgbody'><img src={message.user.avatar} className='pic'/> <span>{message.body}</span></div>
        </div>)
}

export default ChatMessage