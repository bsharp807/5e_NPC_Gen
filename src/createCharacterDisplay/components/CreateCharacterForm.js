import React, { Component } from 'react'

import FormEntry from './FormEntry'
import DropDownEntry from './DropDownEntry'
import GenderEntry from './GenderEntry'
import SubmitSection from './SubmitSection'

class CreateCharacterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      age: ''
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
        <FormEntry 
          type='text'
          heading='name'
          text='First Name' 
          value={this.state.firstName} 
          handleChange={this.handleFirstName} 
        />
        <FormEntry 
          type='text'
          heading='name'
          text='Last Name' 
          value={this.state.lastName} 
          handleChange={this.handleLastName} 
        />
        <FormEntry 
          type='number' 
          heading='number'
          text='Age' 
          value={this.state.age} 
          handleChange={this.handleAge} 
        />
        <DropDownEntry text='Race' options={this.props.races}/>
        <DropDownEntry text='Class' options={this.props.jobs}/>
        <GenderEntry text='Gender' />
        <SubmitSection />
      </form>
    )
  }
}

export default CreateCharacterForm