import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';

class AllCharacterDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

    this.renderCharacters = this.renderCharacters.bind(this)
  }

  renderCharacters(){
    return this.props.characters.map((element, index) => {
      return <CharacterCard character={element} key={index} viewChar= {this.props.viewChar} />
    })
  }

  render(){
    return(
      <div>
        {this.renderCharacters()}
      </div>
    )
  }
}

export default AllCharacterDisplay;
