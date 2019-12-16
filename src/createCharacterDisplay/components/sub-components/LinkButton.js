import React from 'react'
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return <Link id="menu-button" onClick={props.handleClick} to='/'>{props.text}</Link>
}

export default LinkButton