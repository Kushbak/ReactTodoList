import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className={styles.headerBlock}>
            <div className={styles.logo}>
                <NavLink to='/' className={styles.logo}>Todo List</NavLink> 
            </div>
            {props.isAuth
                ? <p>{ props.fullName }</p>
                : <button className={styles.changeTheme}>Change</button>
            }
            
        </div>
    )
}


export default Header;