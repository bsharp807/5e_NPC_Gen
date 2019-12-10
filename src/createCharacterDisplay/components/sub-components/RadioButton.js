import React from 'react'

const RadioButton = (props) => {

  const handleClick = () => {
    props.handleChange(props.index, props.text)
  }

  return(
    <div id='radio-button-group' onClick={handleClick}>
      <div id="radio-button">{props.selected === props.index ? '√' : null}</div>
      <div id="radio-text">{props.text}</div>
    </div>
  )
}

export default RadioButton