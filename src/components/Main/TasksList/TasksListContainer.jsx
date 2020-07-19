import React from 'react'; 
import TasksList from './TasksList';
import { connect } from 'react-redux';
import { addToImportant, addToArchive, removeTask, editTask } from '../../../reducers/tasksReducer';

class TasksListContainer extends React.Component {
    render() {
        return <TasksList {...this.props} />
    }
}

const mstp = (state) => {
    return ({
        tasks: state.tasksData.tasks,
        userId: state.usersData.id
    })
}

export default connect(mstp, { addToImportant, addToArchive, removeTask, editTask })(TasksListContainer);