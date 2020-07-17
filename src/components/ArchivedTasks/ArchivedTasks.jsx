import React from 'react'; 
import styles from './ArchivedTasks.module.css';
import { connect } from 'react-redux';

class ArchivedTasks extends React.Component {
    render(){
        return(
            <div className={styles.archivedTasksBlock}>
                { this.props.tasks.map(t => (
                        <div className={styles.task} key={t.id}>
                            <p className={styles.task__descr}>{t.descr}</p> 
                        </div>
                )) }
            </div>
        )
    }
}

let mstp = (state) => ({
    tasks: state.tasksData.tasks
})

export default connect(mstp, {})(ArchivedTasks);