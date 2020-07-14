import React from 'react'; 
import TasksList from './TasksList';
import { connect } from 'react-redux';
import { addToImportant, setTasks } from '../../../reducers/tasksReducer';

class TasksListContainer extends React.Component {
    componentDidMount(){
        this.props.setTasks(1)
    }

    render() {
        return <TasksList {...this.props} />
    }
}

const mstp = (state) => {
    return ({
        tasks: state.tasksData.allTasks
    })
}

export default connect(mstp, { addToImportant, setTasks })(TasksListContainer);