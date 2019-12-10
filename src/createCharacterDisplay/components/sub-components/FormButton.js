import React from 'react'

const FormButton = (props) => {
  return <div id='menu-button' onClick={props.handleClick}>{props.text}</div>
}

export default FormButton