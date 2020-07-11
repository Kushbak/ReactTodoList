import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return(
        <div className={styles.headerBlock}>
            <div className={styles.logo}>
                <p className={styles.logo}>Todo List</p> 
            </div>
            <div className={styles.changeTheme}>
                Change
            </div>
        </div>
    )
}


export default Header;