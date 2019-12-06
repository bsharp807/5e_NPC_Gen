import React from 'react';
import { Link } from "react-router-dom";

const CreateMenu = (props) => {
  return(
    <Link id= 'menu-button' to='/Generate'>Create a Character</Link>
  )
}

export default CreateMenu;
