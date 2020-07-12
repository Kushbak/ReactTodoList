import React from 'react';
import styles from './Main.module.css';  
import TasksListContainer from './TasksList/TasksListContainer';
import AddTaskContainer from './AddTask/AddTaskContainer';


const Main = (props) => {
    return (
        <div className={styles.MainBlock}>
            <AddTaskContainer />
            <TasksListContainer />
        </div>
    )
}


export default Main;