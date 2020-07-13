import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'; 
import { Route } from 'react-router-dom'; 
import ArchivedTasksContainer from './components/ArchivedTasks/ArchivedTasksContainer';
import ImportantTasksContainer from './components/ImportantTasks/ImportantTasksContainer';


const App = () => { 
    return (
        <div className="app" >
            <Header />
            <Navbar /> 
            <div className="main" >
                <Route exact path='/' render={() => <Main />}/>
                <Route path='/importantTasks' render={() => <ImportantTasksContainer />}/>    
                <Route path='/archivedTasks' render={() => <ArchivedTasksContainer />}/>    
            </div>
        </div>
    );
}

export default App;
