import React from 'react';
import { connect } from 'react-redux';
import CharacterMenu from './components/CharacterMenu';
import CreateMenu from './components/CreateMenu';
import RandomMenu from './components/RandomMenu';
import CharacterDisplay from '../characterDisplay/CharacterDisplay';

const RequestHelper = require('../helpers/request_helper');
const configFile = require('../config/config');

const Menu = (props) => {
  return(
    <React.Fragment>
      <div id='menu-container'>
        <CreateMenu />
        <RandomMenu postRandomCharacter={props.postRandomCharacter}/>
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
    selected: state.selected
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
