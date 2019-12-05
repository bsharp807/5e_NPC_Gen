import React from 'react';

const RandomMenu = (props) => {
  const handleClick = () => {props.setReveal(
    {
      menuReveal: false,
      individualCharacterReveal: true
    }
  )}

  return(
    <div onClick= {handleClick}>Random Character</div>
  )
}

export default RandomMenu;
