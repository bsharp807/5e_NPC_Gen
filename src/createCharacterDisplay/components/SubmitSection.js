import React, { useState } from 'react'
import FormButton from './sub-components/FormButton'
import Cancel from './sub-components/Cancel'

const SubmitSection = (props) => {

  const [reveal, setReveal] = useState(false)

  const handleSubmit = () => {
    setReveal(!reveal)
  }

  const handleConfirm = () => {
    console.log('confirmed');
    
  }

  return(
    <div>
      {
      !reveal 
      ? 
      <div>
        <FormButton handleClick={handleSubmit} text='Submit' /> 
        <Cancel /> 
      </div> 
      :
      <div>
        <div>Submit Character?</div>
        <FormButton handleClick={handleConfirm} text='Yes' />
        <FormButton handleClick={handleSubmit} text='No' />
      </div>
      }
    </div>
  )
}

export default SubmitSection