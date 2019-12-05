import React from 'react';
import CharacterMenu from './components/CharacterMenu';
import CreateMenu from './components/CreateMenu';
import RandomMenu from './components/RandomMenu';

const Menu = (props) => {
  return(
    <div>
      <CharacterMenu setReveal= {props.setReveal} />
      <CreateMenu setReveal= {props.setReveal} />
      <RandomMenu setReveal= {props.setReveal} />
    </div>
  )
}

export default Menu;
