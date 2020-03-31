import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <LoginContainer />
            <Navbar/>
            <div className='mainBlockWrap'>
                <Route  path='/home' render={() => <Main/> } />
                <Route  path='/profile/:userId?' render={() => <ProfileContainer/> }/>
                <Route  path='/news' render={() => <News/> }/>
                <Route  path='/dialogs' render={() => <Dialogs/> }/>
                <Route  path='/users' render={() => <UsersContainer/> }/>
                <Route  path='/music' render={() => <Music/> }/>
                <Route  path='/settings' render={() => <Settings/> }/>
            </div>
        </div>
    );
}

export default App;
