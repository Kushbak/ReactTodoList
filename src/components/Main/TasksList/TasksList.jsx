import React from 'react';
import styles from './TasksList.module.css';

const TasksList = (props) => {
    let doImp = () => {
        props.addToImportant() 
    }
    return(
        <div className={styles.tasksListBlock}>
            {
                props.tasks.map(t => (
                    <div className={styles.task} key={t.id}>
                            <p className={styles.task__descr}>{t.description}</p>
                            <button className={styles.doImp} onClick={ doImp }>imp</button>
                            {t.isImportant && <p>STAR</p>} 
                            <input type="checkbox" checked={t.isImportant} />
                    </div>
                ))
            }
        </div>
    )
}

export default TasksList;