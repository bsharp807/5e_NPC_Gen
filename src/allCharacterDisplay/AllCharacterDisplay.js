import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import { Link } from "react-router-dom";

class AllCharacterDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

    this.renderCharacters = this.renderCharacters.bind(this)
  }

  renderCharacters(){
    return this.props.characters.map((element, index) => {
      return <CharacterCard character={element} key={index} viewChar= {this.props.getSelectedCharacter} />
    })
  }

  render(){
    return(
      <React.Fragment>
        <div>
          <Link id='all-char-back' to= '/'>Back</Link>
        </div>
        <div id="all-character-container">
          {this.renderCharacters()}
        </div>
      </React.Fragment>
    )
  }
}

export default AllCharacterDisplay;
