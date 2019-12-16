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
        <FormButton handleClick={handleSubmit} text='Submit' /> 
        <LinkButton text="Cancel"/> 
      </div> 
      :
      <div>
        <div>Submit Character?</div>
        <LinkButton handleClick={handleConfirm} text='Yes' />
        <FormButton handleClick={handleSubmit} text='No' />
      </div>
      }
    </div>
  )
}

export default SubmitSection