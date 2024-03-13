import { NavLink } from "react-router-dom"

const NavItem = (props) => {
    return (
        <NavLink to={props.href} style={({ isActive }) => isActive ? { color: 'red' } : { color: 'blue' }}>
            {props.name}
        </NavLink>
    )
}

export default NavItem
