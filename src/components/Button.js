import React from 'react'

const Button = ({color, text, onAdd}) => {
  return (
    <button  onClick={onAdd} style={{backgroundColor: color}} className="btn">{text}</button>
  )
}

export default Button