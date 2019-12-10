import React, { Component } from 'react'

import NameEntry from './NameEntry'
import NumberEntry from './NumberEntry'
import DropDownEntry from './DropDownEntry'
import GenderEntry from './GenderEntry'
import SubmitSection from './SubmitSection'

class CreateCharacterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      race: ''
    }

  }

  render(){
    return(
      <form autoComplete='off' id="create-character-form">
        <NameEntry text='First Name' />
        <NameEntry text='Last Name' />
        <NumberEntry text='Age' />
        <DropDownEntry text='Race' />
        <DropDownEntry text='Class' />
        <GenderEntry text='Gender' />
        <SubmitSection />
      </form>
    )
  }
}

export default CreateCharacterForm