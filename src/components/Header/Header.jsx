import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return(
        <div className={styles.headerBlock}>
            <p className={styles.logo}>Todo<span>React</span></p>
            <nav className={styles.navbar}>
                
            </nav>
        </div>
    )
}


export default Header;