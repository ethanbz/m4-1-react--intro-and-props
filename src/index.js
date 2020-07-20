import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div className='superwrapper'>
  <App currentUser={data.currentUser} conversation={data.conversation} />
  <App currentUser={data.currentUser = data.conversation.participants[1]} conversation={data.conversation} />
  </div>,
  rootElement
);
