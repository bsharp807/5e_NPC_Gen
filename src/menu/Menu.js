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
    randomNonPlayerCharacterGenerator(props.attributes)
    props.postRandomCharacter()
  }

  return(
    <React.Fragment>
      <div id='menu-container'>
        <CreateMenu />
        <RandomMenu generateRandomCharacter={generateRandomCharacter}/>
        <CharacterMenu />
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
  postRandomCharacter(){
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
