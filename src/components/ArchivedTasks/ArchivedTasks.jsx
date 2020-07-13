import React from 'react';
import styles from './ArchivedTasks.module.css';


const ArchivedTasks = (props) => {
    return(
        <div className={styles.archivedTasksBlock}>
            { 
                props.archivedTasks.map(t => (
                    <div className={styles.task} key={t.id}>
                        <p className={styles.task__descr}>{t.descr}</p> 
                    </div>
                ))
            }
        </div>
    )
}

export default ArchivedTasks;