import React from 'react';
import { Link } from "react-router-dom";

const CharacterMenu = (props) => {
  return(
    <Link id= 'menu-button' to='/Characters' onClick={props.handleListClick}>List</Link>
  )
}

export default CharacterMenu;
