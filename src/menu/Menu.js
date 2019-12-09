import React from 'react';
import { connect } from 'react-redux';
import CharacterMenu from './components/CharacterMenu';
import CreateMenu from './components/CreateMenu';
import RandomMenu from './components/RandomMenu';
import CharacterDisplay from '../characterDisplay/CharacterDisplay';

const randomNonPlayerCharacterGenerator = require('../helpers/random_npc_logic')
const RequestHelper = require('../helpers/request_helper');
const configFile = require('../config/config');

const Menu = (props) => {

  const generateRandomCharacter = () => {
    const randomCharacter = randomNonPlayerCharacterGenerator(props.attributes)
    props.postRandomCharacter(randomCharacter)
  }

  const handleListClick = () => {
    console.log('inside handle');
    
    props.getListCharacters()
  }

  return(
    <React.Fragment>
      <div id='menu-container'>
        <CreateMenu />
        <RandomMenu generateRandomCharacter={generateRandomCharacter}/>
        <CharacterMenu handleListClick={handleListClick}/>
      </div>
      <div id='overall-character-container'>
        <CharacterDisplay character= {props.selected} />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    selected: state.selected,
    attributes: state.attributes
  }
};

const mapDispatchToProps = dispatch => ({
  postRandomCharacter(payload){
    RequestHelper.post(configFile.char, payload)
    .then((characters) => {
      dispatch({
        type: 'UPDATE_SELECTED_CHARACTER',
        character: characters[characters.length-1]
      })
    })
  },
  getListCharacters(){
    RequestHelper.get(configFile.char)
    .then((characters) => {
      dispatch({
        type: 'GET_CHARACTERS',
        characters
      })
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
