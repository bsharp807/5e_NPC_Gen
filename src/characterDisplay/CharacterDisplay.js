import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard'

const descriptionText = require('../helpers/description_text')

class CharacterDisplay extends Component{
  render(){
    return(
      <div id='character-card-container'>
        <CharacterCard character={this.props.character} text={descriptionText(this.props.character)}/>
      </div>
    )
  }
}

export default CharacterDisplay;
