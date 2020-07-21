import React from 'react';
import styles from './Main.module.css';  
import TasksList from './TasksList/TasksList';
import AddTaskContainer from './AddTask/AddTaskContainer'; 


const Main = (props) => {
    
    return (
        <div className={styles.MainBlock}>
            <AddTaskContainer />
            <TasksList />
        </div>
    )
}


export default Main;