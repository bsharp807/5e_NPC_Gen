import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard'

class CharacterDisplay extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props);
    if(this.props.characters[0]){
      return(
        <div>
          <CharacterCard character={this.props.characters[this.props.index]}/>
        </div>
      )
    } else return null
  }
}

export default CharacterDisplay;
