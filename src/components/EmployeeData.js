import React from 'react';
import data from '../data';
import { Card } from 'react-bootstrap';
function EmployeeData() {
	return (
		<div>
			{data.map((info) => {
				return (
					<div className="employeeData" key={info.id}>
						<Card style={{ width: '20rem' }}>
							{info.first_name}
							{info.last_name}
						</Card>
					</div>
				);
			})}
		</div>
	);
}

export default EmployeeData;
