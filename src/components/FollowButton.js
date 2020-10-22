import React from 'react';
import Button from 'react-bootstrap/Button';

function FollowButton() {
	const clickedFollow = (e) => {
		e.preventDefault();
		console.log(e);
	};
	return (
		<div>
			<Button variant="primary" value="follow" onClick={clickedFollow}>
				Follow
			</Button>
		</div>
	);
}

export default FollowButton;
