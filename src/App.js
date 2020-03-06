import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className="App">
           <Header />
           <Login />
           <Navbar/>
           <Main/>
        </div>
    );
}

export default App;
