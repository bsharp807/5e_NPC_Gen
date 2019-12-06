import React from 'react';
import { connect } from 'react-redux';
import CharacterMenu from './components/CharacterMenu';
import CreateMenu from './components/CreateMenu';
import RandomMenu from './components/RandomMenu';
import CharacterContainer from '../containers/CharacterContainer';

const Menu = (props) => {
  console.log(props);
  
  return(
    <React.Fragment>
      <div id='menu-container'>
        <CreateMenu setReveal= {props.setReveal} />
        <RandomMenu setReveal= {props.setReveal} />
        <CharacterMenu setReveal= {props.setReveal} />
      </div>
      <div id='overall-character-container'>
        <CharacterContainer index={props.characterViewIndex ? props.characterViewIndex : 1} />
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

export default connect(mapStateToProps)(Menu);
