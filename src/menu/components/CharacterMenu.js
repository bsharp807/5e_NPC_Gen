import React from 'react';

const CharacterMenu = (props) => {
  const handleClick = () => {props.setReveal(
    {
      menuReveal: false,
      allCharacterReveal: true
    }
  )}

  return(
    <div onClick= {handleClick}>Characters</div>
  )
}

export default CharacterMenu;
