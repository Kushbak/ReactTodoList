import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'; 
import { Route } from 'react-router-dom'; 
import ArchivedTasks from './components/ArchivedTasks/ArchivedTasks';
import ImportantTasks from './components/ImportantTasks/ImportantTasks';
import { connect } from 'react-redux';
import { setTasks } from './reducers/tasksReducer'
import LoginContainer from './components/Login/LoginContainer';

class App extends React.Component {  
    componentDidMount(){
        this.props.setTasks(1)
    }
    render(){
        return (
            <div className="app" >
                <Header />
                <Navbar /> 
                {!this.props.isAuth
                    ?   <LoginContainer />
                    : <div className="main" >
                            <Route exact path='/' render={() => <Main />}/>
                            <Route path='/importantTasks' render={() => <ImportantTasks />}/>    
                            <Route path='/archivedTasks' render={() => <ArchivedTasks />}/>    
                    </div>
                }
                
            </div>
        );
    }
}

const mstp = (state) => {
    return ({
        tasks: state.tasksData.tasks,
        isAuth: state.usersData.isAuth
    })
}
 
export default connect(mstp, { setTasks })(App);
