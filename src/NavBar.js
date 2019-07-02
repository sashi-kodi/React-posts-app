import React from 'react';
import {Link} from 'react-router-dom';

const NavBar= (props)=>{
    return(
    <nav className="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
        {props.routes.map(el=>(
        <li className="nav-item" key={el.path}>
          <Link to={el.path} >{el.text}</Link>
        </li>
         ))}
    
    
  </ul>
</nav>
    )
}
export default NavBar;