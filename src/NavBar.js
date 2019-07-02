import React from 'react';
import {Link} from 'react-router-dom';

const NavBar= (props)=>{
    return(
    <nav class="navbar navbar-expand-sm bg-light">
  <ul class="navbar-nav">
        {props.routes.map(el=>(
        <li class="nav-item">
          <Link to={el.path} >{el.text}</Link>
        </li>
         ))}
    
    
  </ul>
</nav>
    )
}
export default NavBar;