import React from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const checkActive = (path, match) => {
    return path.includes(match);
  };

function Header() {
    const location = useLocation();
    const isResidentialActive = checkActive(location.pathname, 'residential');
    const isCommercialActive = checkActive(location.pathname, 'commercial');
  
    return (
        <>
        <header className={styles.header}  role = "banner">
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>Atlas Associates</Link>
                <div className={styles.navRight}>
                    <NavLink to="/residential" className={({ isActive }) => isActive ? styles.alink : styles.right}>Residential</NavLink>
                    <NavLink to="/commercial" className={({ isActive }) => isActive ? styles.alink : styles.right}>Commercial</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? styles.alink : styles.right}>Contact</NavLink>
                </div>
            </nav>
        </header>
        <Outlet />
        </>
    );
}

export default Header;