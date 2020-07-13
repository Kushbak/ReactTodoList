import React from 'react';
import styles from './ImportantTasks.module.css';


const ImportantTasks = (props) => {
    return(
        <div className={styles.importantTasksBlock}>
            { props.importantTasks.map(t => (
                <div className={styles.task} key={t.id}>
                    <p className={styles.task__descr}>{t.descr}</p> 
                </div>
                    ))
            }
        </div>
    )
}

export default ImportantTasks;