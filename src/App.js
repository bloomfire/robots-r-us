import React from 'react';
import './App.css';
import Card from './components/card';
import data from './data';
import logo from '../src/assets/robots-r-us-logo.svg';
import '../src/sass/style.sass';

function App() {
    return (
        <div className="App">
            <img src={logo} alt="Robots R Us Logo" className="logo" />
            <section className="card-list">
                {data.map((card, i) => {
                    return <Card card={card} id={i} />;
                })}
            </section>
        </div>
    );
}

export default App;
