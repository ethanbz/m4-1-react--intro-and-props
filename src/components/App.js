import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';


import './App.css';

const App = ({ conversation, currentUser }) => {
  console.log(conversation)
  return (
    <div className='wrapper'>
      <Header users={conversation.participants} currentUser={currentUser} />
      <ChatStream messages={conversation.messages} currentUser={currentUser}/>
      <Footer />
    </div>
  );
};

export default App;
