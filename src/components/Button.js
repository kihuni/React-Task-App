import React from 'react'

const Button = ({color, text}) => {
  const onClick = () => {
      console.log('Fuck you, i can go far on my own still')
  }

  return (
    <button  onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
  )
}

export default Button