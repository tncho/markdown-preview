import React from 'react';
import Header from "./components/Header/Header";
import Content from './components/Content/Content';
import { Provider } from "mobx-react";
import './App.css';
import AppStore from './core/App.store';

const store = new AppStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Header></Header>
                <Content></Content>
            </div>
        </Provider>
    );
}

export default App;
