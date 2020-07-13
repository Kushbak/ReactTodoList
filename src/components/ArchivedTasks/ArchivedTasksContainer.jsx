import React from 'react'; 
import ArchivedTasks from './ArchivedTasks';
import { connect } from 'react-redux';

class ArchivedTasksContainer extends React.Component {
    render(){
        return <ArchivedTasks { ...this.props} />
    }
}

let mstp = (state) => ({
    archivedTasks: state.tasksData.archivedTasks
})

export default connect(mstp, {})(ArchivedTasksContainer);