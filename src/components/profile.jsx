import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';

export default class Profile extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            following: false,
            unfollow: true
        }
    }

    render() {
        const profile = this.props.profile;

        return (
            <Card style={{ width: '18rem' }} bg="light" border="info" className="mb-2" >
                <Card.Img variant="top" src={profile.avatar ? profile.avatar : "https://vignette.wikia.nocookie.net/kingdomheartsfanon/images/a/a9/Walle1.gif/revision/latest/scale-to-width-down/150?cb=20131108025542"} class="img-fluid img-thumbnail" />
                <Card.Body>
                    <Card.Title>{profile.first_name + " " + profile.last_name}</Card.Title>
                    <Card.Text>
                        {profile.title}
                    </Card.Text>
                    <Card.Text>
                        {profile.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
