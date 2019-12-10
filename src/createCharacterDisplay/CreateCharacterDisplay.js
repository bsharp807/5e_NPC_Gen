import React, { Component } from 'react';
import CreateCharacterForm from './components/CreateCharacterForm'
import FormTitle from './components/FormTitle'

class CreateCharacterDisplay extends Component{
  render(){
    return(
      <div id='create-character-display'>
        <FormTitle text='NPC Geneneration Form' />
        <CreateCharacterForm />
      </div>
    )
  }
}

export default CreateCharacterDisplay;
