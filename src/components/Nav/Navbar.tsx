import React from 'react';
import './Navbar.css';
import * as data from './links.json';
import NavLink from './NavLink'
import { Link } from 'react-router-dom'


const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};


const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className="links">
            {links.map((link: Link) => <NavLink key={link.label} to={link.href} >{link.label}</NavLink>)}
        </div>
    )
};

const Navbar: React.FC<{}> = () => {
    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <Links links={links} />
                <div className="navbar__logo">
                    <Link to="/"><img src="/images/panther.png" alt="noname" width="50" /></Link>
                </div>
                <div className="navbar__right">
                    <a href="#">Login</a>
                    <a href="#">Carrito</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;