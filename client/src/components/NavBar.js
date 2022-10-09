import { NavLink,  } from "react-router-dom"


const NavBar = () => {
  return ( 
    <nav className="navbar">
      <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="/">
        <h3 className="logo">D C B</h3>
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
          Cart
        </NavLink>
      </div>

      <NavLink className={({isActive}) => isActive ? "link-selected" : "link-unselected"} to="login">
        Login
      </NavLink>
    </nav>
  
  )
}

export default NavBar