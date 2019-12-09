import React from 'react';
import { Link } from "react-router-dom";

const ViewCharacter = (props) => {

  const handleClick = () => {
    props.viewChar(props.index)
  }

  return(
    <Link id="view-character-link" to="/" onClick= {handleClick}>View Character</Link>
  )
}

export default ViewCharacter;
