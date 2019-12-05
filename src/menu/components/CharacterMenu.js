import React from 'react';

const CharacterMenu = (props) => {
  const handleClick = () => {props.setReveal(
    {
      menuReveal: false,
      allCharacterReveal: true
    }
  )}

  return(
    <div id= 'menu-button' onClick= {handleClick}>List</div>
  )
}

export default CharacterMenu;
