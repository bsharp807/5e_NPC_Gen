import React from 'react'

const NameEntry = (props) => {
  return(
    <div id='name-entry-set'>
      <div id='name-entry-text'>{props.text}</div>
      <input id='name-entry-input' type="text" value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default NameEntry