import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard'

const arraySearch = require('../helpers/array_search.js')

class CharacterDisplay extends Component{
  constructor(props){
    super(props)
    this.state = {
      character: 'not loaded yet'
    }

  }

  componentDidMount() {
    this.getCharacterFromIndex(this.props.index, this.props.characters)    
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
      this.getCharacterFromIndex(this.props.index, this.props.characters)
    }
  }

  getCharacterFromIndex(index, array) {
    const character = arraySearch.search(index, array)
    this.setState({character})
  }

  render(){
    if(this.props.characters.length){
      return(
        <div>
          <CharacterCard character={this.state.character}/>
        </div>
      )
    } else return <div>Loading...</div>
  }
}

export default CharacterDisplay;
