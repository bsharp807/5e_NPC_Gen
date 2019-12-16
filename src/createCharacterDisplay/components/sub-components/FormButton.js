import React from 'react'

const FormButton = (props) => {
  return <div id={props.id} onClick={props.handleClick}>{props.text}</div>
}

export default FormButton