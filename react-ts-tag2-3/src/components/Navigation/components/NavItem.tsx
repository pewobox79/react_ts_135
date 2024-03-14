import {  NavLink } from "react-router-dom"


const NavItem = ({name, href}) => {
  return (
    <NavLink to={href}>
        {name}
    </NavLink>
  )
}

export default NavItem
