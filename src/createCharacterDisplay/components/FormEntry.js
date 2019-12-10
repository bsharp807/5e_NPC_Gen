import React from 'react'

const FormEntry = (props) => {
  return(
    <div id={`${props.heading}-entry-set`}>
      <div id={`${props.heading}-entry-text`}>{props.text}</div>
      <input id={`${props.heading}-entry-input`} type={props.type} value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default FormEntry