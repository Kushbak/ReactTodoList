import React from 'react';
import styles from './TasksList.module.css'; 
import ToggleProp from '../../common/ToggleProp/ToggleProp';

const TasksList = (props) => {   
    let currentInputValue = '';
    const editInputValue = (taskId) => {
        props.editTask(props.userId, taskId, currentInputValue)
    }
    return(
        <div className={styles.tasksListBlock}>
            {props.tasks
                    .filter(f => !f.isArchived )
                    .map(t => (
                        <div className={styles.task} key={ t.id } >
                            <div className={styles.valueBlock} >
                                <input type="text" 
                                    className={ styles.task__descr } 
                                    value={ t.description }  
                                    onChange={ (e) => { currentInputValue = e.target.value } } 
                                    onBlur={ () => { editInputValue(t.id); this.setState({ editMode: false }) } }
                                disabled /> 

                                <ToggleProp { ...props } task={ t } />
                            </div>
                            
                            <div className={ styles.btnBlock }>
                                <button onClick={ () => this.setState({ editMode: true }) }>EDIT</button>
                                <button onClick={ () => props.removeTask(t.id, props.userId) } >REMOVE</button>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default TasksList;