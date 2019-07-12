import React from 'react';
import Header from "./components/Header/Header";
import Content from './components/Content/Content';

import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header></Header>
            <Content></Content>
        </div>
    );
}

export default App;
