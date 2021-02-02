import React from 'react';
import { NavLink } from 'react-router-dom';

let Navbar = (props) => {

    return (
      <div className="navBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    );

};

export default Navbar