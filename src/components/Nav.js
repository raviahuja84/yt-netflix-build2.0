import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav nav_black'>
      <div className='nav_contents'>
        <img
          className='nav_logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />

        <img
          className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Nav;
