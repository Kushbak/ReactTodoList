import React from 'react';
import styles from './Main.module.css';  
import TasksListContainer from './TasksList/TasksListContainer';
import AddTaskContainer from './AddTask/AddTaskContainer';
import { useEffect } from 'react';


const Main = (props) => {
    useEffect(() => {
        if(props.isAuth){
            props.setTasks(props.userId)
        }
    })
    return (
        <div className={styles.MainBlock}>
            <AddTaskContainer />
            <TasksListContainer />
        </div>
    )
}


export default Main;