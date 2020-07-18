import React from 'react';
import styles from './TasksList.module.css';

const TasksList = (props) => { 
    let toggleImportant = (id, bool) => {
        props.addToImportant(props.userId, id, bool) 
    }

    let toggleArchive = (id, bool) => {
        props.addToArchive(props.userId, id, bool) 
    }
    return(
        <div className={styles.tasksListBlock}>
            {
                props.tasks.map(t => (
                    <div className={styles.task} key={t.id}>
                            <p className={styles.task__descr}>{t.description}</p>

                            <input type="checkbox" checked={t.isImportant} onChange={ () => toggleImportant(t.id, !t.isImportant) }/>
                            {t.isImportant && <span>IMPORTANT</span>}

                            <input type="checkbox" checked={t.isArchived} onChange={ () => toggleArchive(t.id, !t.isArchived) }/>
                            {t.isArchived && <span>ARCHIVED</span>} 

                    </div>
                ))
            }
        </div>
    )
}

export default TasksList;