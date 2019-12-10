import React from 'react'
import RadioButton from './sub-components/RadioButton'

const RadioEntry = (props) => {
  return(
   <div id="gender-entry">
    <div id='radio-input'>
      {props.options.map((element, index) => {
       return <RadioButton key={index} text={element} /> 
      })}
    </div>
   </div>
  )
}

export default RadioEntry