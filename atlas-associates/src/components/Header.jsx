import React from 'react';
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
    return (
        <>
        <header className="header"   role="banner">
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>Atlas Associates</Link>
                <div className={styles.navRight}>
                    <Media query="(max-width: 767px)">
                        <NavLink to="/residential" className={({ isActive }) => isActive ? styles.alink : styles.right}>🏘</NavLink>
                        <NavLink to="/commercial" className={({ isActive }) => isActive ? styles.alink : styles.right}>🏗</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.alink : styles.right}>✉</NavLink>
                    </Media>
                    <Media query="(min-width: 768px)">  
                        <NavLink to="/residential" className={({ isActive }) => isActive ? styles.alink : styles.right}>Residential</NavLink>
                        <NavLink to="/commercial" className={({ isActive }) => isActive ? styles.alink : styles.right}>Commercial</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.alink : styles.right}>Contact</NavLink>
                     
                    </Media>
                </div>
            </nav>
        </header>
        <Outlet />
        </>
    );
}

export default Header;