import React from 'react'; 
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className={styles.navbarBlock}>
            <NavLink className={styles.navbarBlock__link} to='/importantTasks'>Important</NavLink>
            <NavLink className={styles.navbarBlock__link} to='/archiveTasks'>Archive</NavLink>
        </div>
    )
}

export default Navbar;