import React from 'react'

const RadioButton = (props) => {
  return(
    <div id='radio-button-group'>
      <div id="radio-button"></div>
      <div id="radio-text">{props.text}</div>
    </div>
  )
}

export default RadioButton