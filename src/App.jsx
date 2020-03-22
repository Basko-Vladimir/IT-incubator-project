import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";


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
                <Route  path='/messages' component={Dialogs}/>
                <Route  path='/users' component={UsersContainer}/>
                <Route  path='/music' component={Music}/>
                <Route  path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
