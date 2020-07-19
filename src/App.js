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
    render(){
        return (
            <div className="app" >
                <Header isAuth={this.props.isAuth} fullName={this.props.fullName}  userId={this.props.userId} setTasks={this.props.setTasks} />
                {!this.props.isAuth
                    ? <LoginContainer />
                    : <>
                        <Navbar /> 
                        <div className="main" >
                                <Route exact path='/' render={() => <Main />}/>
                                <Route path='/importantTasks' render={() => <ImportantTasks />}/>    
                                <Route path='/archivedTasks' render={() => <ArchivedTasks />}/>    
                        </div>
                    </>
                }
                
            </div>
        );
    }
}

const mstp = (state) => ({ 
    isAuth: state.usersData.isAuth,
    userId: state.usersData.id,
    fullName: state.usersData.fullName
})
 
export default connect(mstp, { setTasks })(App);
