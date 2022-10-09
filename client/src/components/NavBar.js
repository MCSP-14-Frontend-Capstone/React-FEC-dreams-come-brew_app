import { NavLink,  } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faSignIn, faCoffee
} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  return ( 
    <nav className="navbar">
      <NavLink className={({isActive}) => isActive ? "link-unselected" : "link-selected"} to="/">
      <div className="logo">
        
         <p>Dreams Come Brew</p>
      <FontAwesomeIcon className="signin-icon" icon={faCoffee}></FontAwesomeIcon>

        
      </div>
      </NavLink>
      <div className="navlinks">
        <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="/about">
          About
        </NavLink>
        <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="/products">
          Products
        </NavLink >
        <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="/contact">
        Contact 
        </NavLink >
        <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="/cart">
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>  Cart
        </NavLink>
      </div>

      <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="login">
      <FontAwesomeIcon className="signin-icon" icon={faSignIn}></FontAwesomeIcon> Login
      </NavLink>
    </nav>
  
  )
}

export default NavBar