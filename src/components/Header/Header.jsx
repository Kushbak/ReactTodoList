import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    useEffect(() => {
        if(props.isAuth){
            props.setTasks(props.userId)
        }
    })
    return(
        <div className={styles.headerBlock}>
            <div className={styles.logo}>
                <NavLink to='/' className={styles.logo}>Todo List</NavLink> 
            </div>
            { props.isAuth && <p>{ props.fullName }</p> }
            
        </div>
    )
}


export default Header;