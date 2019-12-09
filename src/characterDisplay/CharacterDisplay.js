import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard'

class CharacterDisplay extends Component{
  render(){
    console.log(this.props.character);
    
    return(
      <div id='character-card-container'>
        <CharacterCard character={this.props.character}/>
      </div>
    )
  }
}

export default CharacterDisplay;
