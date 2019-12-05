import React from 'react';

const CreateMenu = (props) => {
  const handleClick = () => {props.setReveal(
    {
      menuReveal: false,
      createCharacterReveal: true
    }
  )}

  return(
    <div id= 'menu-button' onClick= {handleClick}>Create a Character</div>
  )
}

export default CreateMenu;
