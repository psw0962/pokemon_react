import React, { Component } from 'react';
import Main from './Main.js';
import Header from './Header.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App_div">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;