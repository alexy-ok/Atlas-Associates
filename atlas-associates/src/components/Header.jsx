import React, {useState} from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import Media from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';
const checkActive = (path, match) => {
    return path.includes(match);
};

function Header() {
    const location = useLocation();
    const isResidentialActive = checkActive(location.pathname, 'residential');
    const isCommercialActive = checkActive(location.pathname, 'commercial');
    const transparentRoutes = ['/contact'];
    const isTransparent = transparentRoutes.includes(location.pathname);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <>
        <header className="header"   role="banner">
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>Atlas Associates</Link>

                <Media query="(max-width: 767px)">
                        {!menuOpen && (
                            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                                &#9776; 
                                
                            </div>
                        )}
                        {menuOpen && (
                            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                               &#x2715;
                                
                            </div>
                        )}
                </Media>

               
                {/*
                <div className={styles.navRight}>
                    <Media query="(max-width: 767px)">
                        <NavLink to="/residential" className={({ isActive }) => isActive ? styles.alink : styles.right}>Res.</NavLink>
                        <NavLink to="/commercial" className={({ isActive }) => isActive ? styles.alink : styles.right}>Com.</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.alink : styles.right}>✉</NavLink>
                    </Media>
                */}
                    <Media query="(min-width: 768px)">  
                        <div className={styles.navRight}>
                            <NavLink to="/residential" className={({ isActive }) => isActive ? styles.alink : styles.right}>Residential</NavLink>
                            <NavLink to="/commercial" className={({ isActive }) => isActive ? styles.alink : styles.right}>Commercial</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.alink : styles.right}>Contact</NavLink>
                        </div>
                    </Media>
                <Media query="(max-width: 767px)">
                    {menuOpen && (
                        <div className={styles.mobileMenu}>
                            <NavLink to="/residential" className={({ isActive }) => isActive ? styles.alink : styles.right} onClick={toggleMenu}>Residential</NavLink>
                            <NavLink to="/commercial" className={({ isActive }) => isActive ? styles.alink : styles.right} onClick={toggleMenu}>Commercial</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.alink : styles.right} onClick={toggleMenu}>Contact</NavLink>
                        </div>
                    )}
                </Media>
            </nav>
            
        </header>
        <Outlet />
        </>
    );
}

export default Header;