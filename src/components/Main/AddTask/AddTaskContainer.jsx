import React from 'react'; 
import AddTask from './AddTask';
import { connect } from 'react-redux';
import { addNewTask } from '../../../reducers/tasksReducer'

class AddTaskContainer extends React.Component {
    render(){
        return <AddTask {...this.props} />
    }
}

const mstp = (state) => ({
    tasks: state.tasksData.tasks,
    userId: state.usersData.id
})

export default connect(mstp, { addNewTask })(AddTaskContainer);