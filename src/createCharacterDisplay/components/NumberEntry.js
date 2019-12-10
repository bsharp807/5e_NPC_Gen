import React from 'react'

const NumberEntry = (props) => {
  return(
    <div id='number-entry-set'>
      <div id='number-entry-text'>{props.text}</div>
      <input id='number-entry-input' type="number" value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default NumberEntry