import React from 'react';
import './App.css';

import Navigation from "../Navigation/Navigation";
import TodoBoard from "../TodoBoard/TodoBoard";

function App() {
    return (
        <div className="App">
            <Navigation />
            <TodoBoard />
        </div>
    );
}

export default App;
