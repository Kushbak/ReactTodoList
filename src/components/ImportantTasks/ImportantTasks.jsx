import React, { useState }  from 'react';
import { connect } from 'react-redux';
import styles from './ImportantTasks.module.css'
import ToggleProp from '../common/ToggleProp/ToggleProp';
import { addToImportant, addToArchive, removeTask, editTask, doneTask, toggleEditMode } from '../../reducers/tasksReducer'; 

const ImportantTasks = (props) => {
    let [input, setInput] = useState();
    // TODO: сделать editMode с помощью хуков, убрать editMode с апи

    let setProps = (where, taskId, text, bool) => {
        props.tasks.map(item => {
            if (item.id === taskId) {
                switch (where) {
                    case 'onChange':
                        setInput(text);
                        break;
                    case 'onFocus':
                        setInput(item.description);
                        break;
                    case 'editMode':
                        props.toggleEditMode(taskId, props.userId, bool)
                        break;
                }
            }
        })
    }

    let sendUpdatedInput = (taskId) => {
        props.editTask(props.userId, taskId, input)
        setInput('');
    }
    return (
        <div className={styles.importantTasksBlock}>
            {props.tasks
                .filter(f => f.isImportant && !f.isArchived)
                .map(t => (
                    <div className={styles.task + ' ' + (t.isDone && styles.done)} key={t.id}>
                        <div className={styles.valueBlock}>
                            <input type="text"
                                className={styles.task__descr + ' ' + (t.editMode && styles.task__editMode)}
                                value={t.editMode ? (input || t.description) : t.description}
                                onChange={(e) => { setProps('onChange', t.id, e.target.value, t.editMode) }}
                                onFocus={() => { setProps('onFocus', t.id, undefined, t.editMode) }}
                                onBlur={() => { sendUpdatedInput(t.id); setProps('editMode', t.id, undefined, false) }}
                                disabled={!t.editMode} />

                            <ToggleProp {...props} task={t} />
                        </div>

                        <div className={styles.btnBlock}>
                            <button onClick={ () => props.doneTask(t.id, props.userId, !t.isDone) }>DONE</button>
                            <button onClick={ () => setProps('editMode', t.id, undefined, true) }>EDIT</button>
                            <button onClick={ () => props.removeTask(t.id, props.userId) }>REMOVE</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

let mstp = (state) => ({
    tasks: state.tasksData.tasks,
    userId: state.usersData.id
})

export default connect(mstp, { addToImportant, addToArchive, removeTask, editTask, doneTask, toggleEditMode })(ImportantTasks);