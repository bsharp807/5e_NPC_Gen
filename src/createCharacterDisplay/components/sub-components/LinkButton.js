import React from 'react'
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return <Link id={props.id} onClick={props.handleClick} to='/'>{props.text}</Link>
}

export default LinkButton