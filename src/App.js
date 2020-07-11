import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TasksPage from './components/TasksPage/TasksPage';
import ImportantTasks from './components/ImportantTasks/ImportantTasks';
import { Route } from 'react-router-dom';


const App = () => { 
    return (
        <div className="app" >
            <Header />
            <Navbar /> 
            <div className="main" >
                <Route path='/tasks' render={() => <TasksPage />}/>
                <Route path='/importantTasks' render={() => <ImportantTasks />}/>    
            </div>
        </div>
    );
}

export default App;
