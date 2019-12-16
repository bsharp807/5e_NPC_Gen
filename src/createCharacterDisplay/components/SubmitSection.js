import React, { useState } from 'react'
import FormButton from './sub-components/FormButton'
import LinkButton from './sub-components/LinkButton'

const SubmitSection = (props) => {

  const [reveal, setReveal] = useState(false)

  const handleSubmit = () => {
    setReveal(!reveal)
    props.handleUpdate()
  }

  const handleConfirm = () => {
    props.handleConfirm();
  }

  return(
    <div>
      {
      !reveal 
      ? 
      <div>
        <FormButton id='menu-button' handleClick={handleSubmit} text='Submit' /> 
        <LinkButton id='menu-button' text="Cancel"/> 
      </div> 
      :
      <div>
        <div>Submit Character?</div>
        <LinkButton id='menu-button' handleClick={handleConfirm} text='Yes' />
        <FormButton id='menu-button' handleClick={handleSubmit} text='No' />
      </div>
      }
    </div>
  )
}

export default SubmitSection