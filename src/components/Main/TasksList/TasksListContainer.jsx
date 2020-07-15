import React from 'react'; 
import TasksList from './TasksList';
import { connect } from 'react-redux';
import { addToImportant } from '../../../reducers/tasksReducer';

class TasksListContainer extends React.Component {
    render() {
        return <TasksList {...this.props} />
    }
}

const mstp = (state) => {
    return ({
        tasks: state.tasksData.tasks
    })
}

export default connect(mstp, { addToImportant })(TasksListContainer);