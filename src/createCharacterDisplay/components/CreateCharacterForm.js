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
      firstName: '',
      lastName: '',
      age: null
    }

    this.handleFirstName = this.handleFirstName.bind()
    this.handleLastName = this.handleLastName.bind()
    this.handleLastName = this.handleLastName.bind()
  }

  handleFirstName = (event) => {
    this.setState({firstName: event.target.value})
  }

  handleLastName = (event) => {
    this.setState({lastName: event.target.value})
  }

  handleAge = (event) => {
    this.setState({age: event.target.value})
  }

  render(){
    return(
      <form autoComplete='off' id="create-character-form">
        <NameEntry text='First Name' value={this.state.firstName} handleChange={this.handleFirstName} />
        <NameEntry text='Last Name' value={this.state.lastName} handleChange={this.handleLastName} />
        <NumberEntry text='Age' value={this.state.age} handleChange={this.handleAge} />
        <DropDownEntry text='Race' />
        <DropDownEntry text='Class' />
        <GenderEntry text='Gender' />
        <SubmitSection />
      </form>
    )
  }
}

export default CreateCharacterForm