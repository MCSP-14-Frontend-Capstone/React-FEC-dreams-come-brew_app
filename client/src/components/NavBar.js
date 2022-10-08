import { NavLink } from "react-router-dom"

const NavBar = () => {
  return ( 
    <nav className="navbar">
      <NavLink to="/">
        <h3>D C B</h3>
      </NavLink>
      <div className="navlinks">
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/products">
          Products
        </NavLink>
        <NavLink to="/contact">
        Contact 
        </NavLink>
        <NavLink to="/cart">
          Cart
        </NavLink>
      </div>

      <NavLink to="login">
        Login
      </NavLink>
    </nav>
  
  )
}

export default NavBar