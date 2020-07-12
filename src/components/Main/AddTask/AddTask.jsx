import React from 'react';
import styles from './AddTask.module.css';
import { Field, reduxForm } from 'redux-form';

const AddTask = (props) => { 
    const submitTask = (formData) => { 
        let id = props.tasks.length;
        let date = new Date();
        let taskData = {
            id,
            date,
            descr: formData.taskDescr,
            isImportant: false
        }

        props.addNewTask(taskData) 
    }
    return(
        <div className={styles.addTaskBlock}>
            <form onSubmit={props.handleSubmit(submitTask)} className={styles.addtTaskForm}>
                <Field className={styles.inputTask} component='input' name='taskDescr' type='text' placeholder='What Do You Wanna Do?' />
                { props.error && <div className={styles.wrongData}>{ props.error }</div> }
                <button className={styles.addBtn}>Add</button>
            </form>
        </div>
    )
}

export default reduxForm({form: 'addTask'})(AddTask);