import React from 'react'; 
import ImportantTasks from './ImportantTasks';
import { connect } from 'react-redux';


class ImportantTasksContainer extends React.Component {
    render() {
        return <ImportantTasks { ...this.props } />
    }
}

let mstp = (state) => ({
    importantTasks: state.tasksData.importantTasks
})

export default connect(mstp, {})(ImportantTasksContainer);