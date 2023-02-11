import React from 'react'
import Deny from './Deny';
import Post from './Post';

const Posts = () => {

  const checkData = () => {
    let item = localStorage.getItem('user');
    let userItem = JSON.parse(item);

    if (userItem.length !== 0 && !userItem.includes(null))
      return true;
    else
      return false;

  }

  const user = checkData()

  return (
    <div>
      {user ? <Post /> : <Deny />}
    </div>
  )
}

export default Posts