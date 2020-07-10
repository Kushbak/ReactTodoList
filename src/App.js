import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TasksPage from './components/TasksPage/TasksPage';
import ImportantTasks from './components/ImportantTasks/ImportantTasks';
import { Route } from 'react-router-dom';


const App = () => { 
    return (
        <div className="App">
            <Header />
            <Route path='/tasks' render={() => <TasksPage />}/>
            <Route path='/importantTasks' render={() => <ImportantTasks />}/>
        </div>
    );
}

export default App;
