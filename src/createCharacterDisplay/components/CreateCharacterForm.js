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
      age: '',
      race: '',
      job: ''
    }

    this.handleFirstName = this.handleFirstName.bind()
    this.handleLastName = this.handleLastName.bind()
    this.handleLastName = this.handleLastName.bind()
    this.handleRace = this.handleRace.bind()
    this.handleJob = this.handleJob.bind()
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

  handleRace = (race) => {
    this.setState({race})
  }

  handleJob = (job) => {
    this.setState({job})
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
        <DropDownEntry 
          text='Race'
          selector='race' 
          options={this.props.attributes.races}
          updateOption={this.handleRace}
        />
        <DropDownEntry 
          text='Class'
          selector='job'
          options={this.props.attributes.jobs}
          updateOption={this.handleJob}
        />
        <GenderEntry text='Gender' />
        <SubmitSection />
      </form>
    )
  }
}

export default CreateCharacterForm