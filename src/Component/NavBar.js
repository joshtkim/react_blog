import React from 'react';
import { NavLink, Link } from 'react-router-dom';

let Navbar = (props) => {

    return (
      <div className="navBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <Link to="/about">About</Link>
      </div>
    );

};

export default Navbar