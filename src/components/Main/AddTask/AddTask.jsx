import React from 'react';
import styles from './AddTask.module.css';
import { Field, reduxForm } from 'redux-form';

const AddTask = (props) => { 
    const submitTask = (formData) => {   
        let taskData = {  
            description: formData.taskDescr,
            isImportant: formData.isImportant,
            isArchived: false,
            userId: props.userId
        }
        
        props.addNewTask(taskData) 
    }
    return(
        <div className={styles.addTaskBlock}>
            <form onSubmit={props.handleSubmit(submitTask)} className={styles.addtTaskForm}>
                <Field className={styles.inputTask} component='input' name='taskDescr' type='text' placeholder='What Do You Wanna Do?' /> 
                <Field className={styles.isImportant} component='input' name='isImportant' type='checkbox' /> 
                { props.error && <div className={styles.wrongData}>{ props.error }</div> }
                <button className={styles.addBtn}>Add</button>
            </form>
        </div>
    )
}

export default reduxForm({form: 'addTask'})(AddTask);