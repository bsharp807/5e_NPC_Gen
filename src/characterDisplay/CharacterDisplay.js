import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard'

class CharacterDisplay extends Component{
  render(){
    return(
      <div id='character-card-container'>
        <CharacterCard character={this.props.character}/>
      </div>
    )
  }
}

export default CharacterDisplay;
