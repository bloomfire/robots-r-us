import React from 'react';
import data from './data';
import EmployeeData from './components/EmployeeData';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Robots-R-Us</h1>
			<EmployeeData />
			{/* {data.map(robot => ...)} */}
		</div>
	);
}

export default App;
