import './Navbar.css';
import * as data from './links.json';
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useRef } from 'react';


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
    const navRef = useRef<HTMLElement | null>(null)

    const showNavLeft = () => {
        navRef.current?.classList.toggle("responsive_navLeft")
    }

    return (
        <header className="navbar">
            <div className="navbar__wrapper">
                <button
                    onClick={showNavLeft}
                    className="nav-btn nav-bars-btn"
                >
                    <FaBars />
                </button>
                <nav ref={navRef} className='navbar__left'>
                    <Links links={links} />
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavLeft}
                    >
                        <FaTimes />
                    </button>
                </nav>

                <div className="navbar__logo">
                    <Link to="/"><img src="/images/panther.png" alt="noname" width="50" /></Link>
                </div>

                <nav className="navbar__right">
                    <a href="#"><FaUser /></a>
                    <a href="#"><FaShoppingCart /></a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;