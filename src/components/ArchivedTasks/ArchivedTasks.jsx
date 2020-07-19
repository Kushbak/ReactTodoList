import React from 'react'; 
import styles from './ArchivedTasks.module.css';
import { connect } from 'react-redux';
import ToggleProp from '../common/ToggleProp/ToggleProp';
import { addToImportant, addToArchive, removeTask } from '../../reducers/tasksReducer';

class ArchivedTasks extends React.Component {
    render(){
        return <div className={styles.archivedTasksBlock}>
            { this.props.tasks
                .filter(f => f.isArchived)
                .map(t => (
                        <div className={styles.task} key={t.id}>
                            <div className={ styles.valueBlock }>
                                <input type="text" className={ styles.task__descr } value={ t.description } disabled /> 

                                <ToggleProp {...this.props} task={ t } />
                            </div>

                            <div className={ styles.btnBlock }>
                                <button onClick={ () => this.setState({ editMode: true }) }>EDIT</button>
                                <button onClick={ () => this.props.removeTask(t.id, this.props.userId) } >REMOVE</button>
                            </div>
                        </div>
                )) 
            } 
        </div> 
    }
}

let mstp = (state) => ({
    tasks: state.tasksData.tasks,
    userId: state.usersData.id
})

export default connect(mstp, { addToImportant, addToArchive, removeTask })(ArchivedTasks);