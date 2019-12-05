import React from 'react';
import CharacterMenu from './components/CharacterMenu';
import CreateMenu from './components/CreateMenu';
import RandomMenu from './components/RandomMenu';

const Menu = (props) => {
  return(
    <div>
      <CreateMenu setReveal= {props.setReveal} />
      <RandomMenu setReveal= {props.setReveal} />
      <CharacterMenu setReveal= {props.setReveal} />
    </div>
  )
}

export default Menu;
