import React from 'react';

import './Header.css';

const Header = ({users, currentUser}) => {
  return (
  <header>
    {users.filter(user => user !== currentUser).map(user => 
      <div key={user.username} className='user'>
        <img src={user.avatar}/>
        <span>{user.username}</span>
      </div>)}
  </header>
    );
};

export default Header;
