import { NavLink } from "react-router-dom"

const NavBar = () => {
  return ( 
    <nav className="navbar">
      <NavLink>
        <h3>D C B</h3>
      </NavLink>
      <div className="navlinks">
        <NavLink>
          About
        </NavLink>
        <NavLink>
          Products
        </NavLink>
        <NavLink>
        Contact 
        </NavLink>
        <NavLink>
          Cart
        </NavLink>
      </div>

      <NavLink>
        Login
      </NavLink>
    </nav>
  
  )
}

export default NavBar