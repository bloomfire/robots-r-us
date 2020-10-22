import React from 'react';
import data from '../data';
import { Card } from 'react-bootstrap';
import FollowButton from './FollowButton';

function EmployeeData() {
	return (
		<div className="parent">
			{data.map((info) => {
				return (
					<div className="employee__card" key={info.id}>
						<Card style={{ width: '20rem' }}>
							<Card.Img variant="top" src={info.avatar} />
							<Card.Body>
								<Card.Text>
									{info.first_name} {info.last_name}
								</Card.Text>
								<FollowButton />
								<Card.Text>{info.title}</Card.Text>
								<Card.Text>{info.email}</Card.Text>
							</Card.Body>
						</Card>
					</div>
				);
			})}
		</div>
	);
}

export default EmployeeData;
