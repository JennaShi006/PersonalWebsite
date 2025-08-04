import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav>
      <Link to="/">About</Link>
      <span> | </span>
      <Link to="/resume">Resume</Link>  
      <span> | </span>
      <Link to="/singapore">UF in Singapore</Link>
      <span> | </span>
      <Link to="/internship">Internship</Link>
      <span> | </span>
      <Link to="/skills">Skills</Link>

    </nav>
  );
}

export default Navbar;