import React, { useState } from 'react'

const DropDownEntry = (props) => {

  const [reveal, setReveal] = useState(false)
  const [value, setValue] = useState(null)
  
  const optionSelect = (option) => {
    props.updateOption(option)
    setReveal(false)
    setValue(option)
  }
  
  const renderOptions = () => {
    return props.options.map((element, index) => {
      return <div
        key={index} 
        onClick={() => optionSelect(element[props.selector])}>{element[props.selector]}
      </div>
    })
  }

  if(props.options){
    return(
      <div>
        <div onClick={() => setReveal(!reveal)}>{value ? value : props.text}</div>
        {reveal ? renderOptions() : null}
      </div>
    )
      } else return <div>loading...</div>
}

export default DropDownEntry