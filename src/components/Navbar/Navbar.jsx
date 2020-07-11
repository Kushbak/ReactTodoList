import React from 'react'; 
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className={styles.navbarBlock}>
            <NavLink to='/importantTasks'>Important</NavLink>
        </div>
    )
}

export default Navbar;