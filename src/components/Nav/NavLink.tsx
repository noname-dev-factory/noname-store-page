import { NavLink as NavLinkDefault } from 'react-router-dom'

const NavLink = ({ ...props }) => {
    return (
        <NavLinkDefault
            {...props}
            className={({ isActive }) => {
                return isActive ? 'is-active' : undefined
            }}
            to={props.to}
        >{props.children}
        </NavLinkDefault>
    )
}

export default NavLink