import React from 'react';
import { Link } from "react-router-dom";

const CharacterMenu = (props) => {
  return(
    <Link id= 'menu-button' to='/Characters'>List</Link>
  )
}

export default CharacterMenu;
