import React, { Component } from 'react'

import FormEntry from './FormEntry'
import DropDownEntry from './DropDownEntry'
import RadioEntry from './RadioEntry'
import SubmitSection from './SubmitSection'

const randomNonPlayerCharacterGenerator = require('../../helpers/random_npc_logic')
const formRandomElements = require('../../helpers/partial_npc_logic')

class CreateCharacterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      age: '',
      race: '',
      job: '',
      gender: 'Female',
      trait: '',
      appearance: '',
      talent: '',
      mannerism: '',
      ideal: '',
      bond: '',
      flaw: '',
      birthplace: '',
      high_skill: '',
      low_skill: '',
      radioSelected: 0
    }

    this.handleFirstName = this.handleFirstName.bind()
    this.handleLastName = this.handleLastName.bind()
    this.handleLastName = this.handleLastName.bind()
    this.handleRace = this.handleRace.bind()
    this.handleJob = this.handleJob.bind()
    this.handleGender = this.handleGender.bind()
    this.updateAllRandomElements = this.updateAllRandomElements.bind()
    this.handleConfirm = this.handleConfirm.bind()
  }

  updateAllRandomElements = () => {
    const character = randomNonPlayerCharacterGenerator(this.props.attributes)
    this.setState({...character})
  }

  updateFinalElements = () => {
    const randomElements = formRandomElements(this.props.attributes)
    this.setState({...randomElements})
  }

  handleFirstName = (event) => {
    this.setState({first_name: event.target.value})
  }

  handleLastName = (event) => {
    this.setState({last_name: event.target.value})
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

  handleGender = (index, gender) => {
    this.setState({radioSelected: index, gender})
  }

  handleConfirm = () => {
    const newCharacter = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      race: this.state.race,
      job: this.state.job,
      gender: this.state.gender,
      trait: this.state.trait,
      appearance: this.state.appearance,
      talent: this.state.talent,
      mannerism: this.state.mannerism,
      ideal: this.state.ideal,
      bond: this.state.bond,
      flaw: this.state.flaw,
      birthplace: this.state.birthplace,
      high_skill: this.state.high_skil,
      low_skill: this.state.low_skill
    }
    this.props.postCreatedCharacter(newCharacter)
  }

  render(){
    return(
      <form autoComplete='off' id="create-character-form">
        <FormEntry 
          type='text'
          heading='name'
          text='First Name' 
          value={this.state.first_name} 
          handleChange={this.handleFirstName} 
        />
        <FormEntry 
          type='text'
          heading='name'
          text='Last Name' 
          value={this.state.last_name} 
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
        <RadioEntry 
          options={['Female', 'Male']}
          selected={this.state.radioSelected}
          handleChange={this.handleGender}
        />
        <SubmitSection 
          handleUpdate={this.updateFinalElements}
          handleConfirm={this.handleConfirm}
        />
      </form>
    )
  }
}

export default CreateCharacterForm