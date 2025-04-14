import React from 'react';

import './Header.css'
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
          <p>This is header</p>

          <nav>
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/mobiles'>Mobiles</NavLink>
             <NavLink to='/laptops'>Laptops</NavLink>
          </nav>
        </div>
    );
};

export default Header;