import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Users from "./components/Users/Users";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Login/>
            <Navbar/>
            <div className='mainBlockWrap'>
                <Route  path='/home' component={Main} />
                <Route  path='/profile' component={Profile}/>
                <Route  path='/news' component={News}/>
                <Route  path='/messages' component={DialogsContainer}/>
                <Route  path='/users' component={Users}/>
                <Route  path='/music' component={Music}/>
                <Route  path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
