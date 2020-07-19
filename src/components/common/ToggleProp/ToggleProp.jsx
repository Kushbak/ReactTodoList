import React from 'react';
import styles from './ToggleProp.module.css'

const ToggleProp = (props) => { 
    let toggleImportant = (id, bool) => {
        props.addToImportant(props.userId, id, bool) 
    }

    let toggleArchive = (id, bool) => {
        props.addToArchive(props.userId, id, bool) 
    }
    return (
        <div className={styles.toggleBlock}>
            <label>
                <input type="checkbox" checked={props.task.isImportant} onChange={() => toggleImportant(props.task.id, !props.task.isImportant)} />
                <span>IMPORTANT</span>
            </label>
            
            <label>
                <input type="checkbox" checked={props.task.isArchived} onChange={() => toggleArchive(props.task.id, !props.task.isArchived)} />
                <span>ARCHIVED</span>
            </label>
        </div>
    )
}

export default ToggleProp;