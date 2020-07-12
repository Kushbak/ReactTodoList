import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ImportantTasks from './components/ImportantTasks/ImportantTasks';
import { Route } from 'react-router-dom';
import ArchiveTasks from './components/ArchiveTasks/ArchiveTasks';


const App = () => { 
    return (
        <div className="app" >
            <Header />
            <Navbar /> 
            <div className="main" >
                <Route exact path='/' render={() => <Main />}/>
                <Route path='/importantTasks' render={() => <ImportantTasks />}/>    
                <Route path='/archiveTasks' render={() => <ArchiveTasks />}/>    
            </div>
        </div>
    );
}

export default App;
