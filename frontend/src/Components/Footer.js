import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav>
      <Link to="https://www.linkedin.com/in/haoran-shi2">linkedin</Link>
      <span> | </span>
      <Link to="mailto:haoran.shi@ufl.edu">Email</Link>  
    </nav>
  );
}

export default Footer;