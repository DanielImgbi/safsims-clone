import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css'
import { Button } from 'react-bootstrap';

export const MyButton = ({ name }) => {
    const handleClick = () => {
        console.log(`Hello ${name}`)
    }
  return (
      <Button className='custom-button' onClick={ () => handleClick}>{ name }</Button>
  )
}
