import React from 'react';

const ViewCharacter = (props) => {

  const handleClick = () => {
    props.viewChar({
      menuReveal: true,
      allCharacterReveal: false,
      characterViewIndex: props.index
    })
  }

  return(
    <div onClick= {handleClick}>View Character</div>
  )
}

export default ViewCharacter;
