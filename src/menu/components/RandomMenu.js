import React from 'react';

const RandomMenu = (props) => {
  return(
    <div id= 'menu-button' onClick={props.generateRandomCharacter}>Random Character</div>
  )
}

export default RandomMenu;
