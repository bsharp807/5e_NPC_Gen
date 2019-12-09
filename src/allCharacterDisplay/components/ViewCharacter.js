import React from 'react';
import { Link } from "react-router-dom";

const ViewCharacter = (props) => {

  const handleClick = () => {
    console.log('view char clicked');
    
  }

  return(
    <Link id="view-character-link" to="/" onClick= {handleClick}>View Character</Link>
  )
}

export default ViewCharacter;
