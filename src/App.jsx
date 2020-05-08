import React, {lazy, Suspense} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginFormContainer from "./components/Login/LoginForm/LoginFormContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const Dialogs = lazy(import("./components/Dialogs/Dialogs"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <Header/>
                <LoginFormContainer/>
                <Navbar/>
                <div className='mainBlockWrap'>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path='/home' render={() => <Main/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/> }/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/dialogs' render={() => {
                            return <Suspense fallback={<Preloader/>}>
                                    <Dialogs/>
                            </Suspense>
                        }}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
