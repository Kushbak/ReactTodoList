import React from 'react';
import styles from './TasksList.module.css';

const TasksList = (props) => {
    return(
        <div className={styles.tasksListBlock}>
            {
                props.tasks.map(t => <div className={styles.task} key={t.id}>
                        <p className={styles.task__descr}>{t.descr}</p>
                        {t.isImportant && <p>STAR</p>} 
                    </div>
                )
            }
        </div>
    )
}

export default TasksList;