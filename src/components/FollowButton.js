import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function FollowButton() {
	//initialize state with unfollowed
	const [follow, setFollow] = useState('Unfollowed');
	const clickedFollow = (e) => {
		e.preventDefault();
		//if the state is unfollowed the set it to following
		if (follow === 'Unfollowed') {
			setFollow('Following');
		} else {
			setFollow('Unfollowed');
		}
		//console.log(follow)
	};
	return (
		<div>
			<Button
				style={{ backgroundColor: '#61dafb' }}
				value="follow"
				onClick={clickedFollow}>
				{follow}
			</Button>
		</div>
	);
}

export default FollowButton;
