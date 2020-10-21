import React from 'react';
import data from '../data';

function EmployeeData() {
	return (
		<div>
			{data.map((info) => {
				console.log(info);
			})}
		</div>
	);
}

export default EmployeeData;
