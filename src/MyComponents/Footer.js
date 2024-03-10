import React from 'react';
import './footer.css';
import todo2 from './todo2.png';

export const Footer = () => {
  return (
    <footer className='footer'>
      <img src={todo2}></img>
      <p className='para'>
        Copyright &copy; ToDoApp.com
      </p>
    </footer>
  )
}
