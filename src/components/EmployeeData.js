import React from 'react';
import data from '../data';

function EmployeeData() {
	return (
		<div>
			{data.map((info) => {
				return (
					<div className="employeeData" key={info.id}>
						{info.first_name}
						{info.last_name}
					</div>
				);
			})}
		</div>
	);
}

export default EmployeeData;
