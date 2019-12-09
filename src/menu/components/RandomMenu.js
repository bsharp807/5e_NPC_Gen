import React from 'react';

const RandomMenu = (props) => {

  const handleClick = () => {
    props.postRandomCharacter()
  }

  return(
    <div id= 'menu-button' onClick={handleClick}>Random Character</div>
  )
}



export default RandomMenu;
