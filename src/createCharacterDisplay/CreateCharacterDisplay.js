import React from 'react';
import CreateCharacterForm from './components/CreateCharacterForm'
import FormTitle from './components/FormTitle'

const CreateCharacterDisplay = (props) => {
    return(
      <div id='create-character-display'>
        <FormTitle text='NPC Geneneration Form' />
        <CreateCharacterForm 
          attributes={props.attributes} 
          postCreatedCharacter={props.postCreatedCharacter}
        />
      </div>
    )
}

export default CreateCharacterDisplay;
