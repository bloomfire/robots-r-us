import React from 'react';
import './App.css';
import Card from './components/card';
import data from './data';

function App() {
    return (
        <div className="App">
            <h1>Robots-R-Us</h1>
            {data.map((card, i) => {
                return <Card card={card} key={i} />;
            })}
        </div>
    );
}

export default App;
