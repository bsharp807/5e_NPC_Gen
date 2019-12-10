import React from 'react'
import RadioButton from './sub-components/RadioButton'

const RadioEntry = (props) => {
  return(
   <div id="gender-entry">
     <div id='radio-input'>
        <RadioButton text='Female' />
        <RadioButton text='Male' />
     </div>
   </div>
  )
}

export default RadioEntry