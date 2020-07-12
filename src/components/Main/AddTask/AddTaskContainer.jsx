import React from 'react'; 
import AddTask from './AddTask';
import { connect } from 'react-redux';
import { addNewTask } from '../../../actions/tasks'

class AddTaskContainer extends React.Component {
    render(){
        return <AddTask {...this.props} />
    }
}

const mstp = (state) => ({
    tasks: state.tasksData.allTasks
})

export default connect(mstp, { addNewTask })(AddTaskContainer);