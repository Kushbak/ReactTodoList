import React from 'react';
import { connect } from 'react-redux';
import styles from './ImportantTasks.module.css'
import ToggleProp from '../common/ToggleProp/ToggleProp'; 
import { addToImportant, addToArchive, removeTask, editTask } from '../../reducers/tasksReducer';

class ImportantTasks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false
        }
    } 
    currentInputValue =  '';
    editInputValue(taskId) {
        this.props.editTask(this.props.userId, taskId, this.currentInputValue)
    }
    render() {
        return <div className={ styles.importantTasksBlock }>
            { this.props.tasks
                .filter(f => f.isImportant && !f.isArchived)
                .map(t => (
                        <div className={ styles.task } key={ t.id }>
                            <div className={ styles.valueBlock }>
                                { this.state.editMode
                                    ? <input type="text" 
                                        className={ styles.task__descr } 
                                        value={ t.description } 
                                        onChange={ (e) => { this.currentInputValue = e.target.value } } 
                                        onBlur={ () => { this.editInputValue(t.id); this.setState({ editMode: false }) } }/> 

                                    : <input type="text" className={ styles.task__descr } value={ t.description } disabled /> 
                                }
                                

                                <ToggleProp { ...this.props } task={ t } />
                            </div>
                            
                            <div className={ styles.btnBlock }>
                                <button onClick={ () => this.setState({ editMode: true }) }>EDIT</button>
                                <button onClick={ () => this.props.removeTask(t.id, this.props.userId) }>REMOVE</button>
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

export default connect(mstp, { addToImportant, addToArchive, removeTask, editTask })(ImportantTasks);