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
                <Card.Img variant="top" src={profile.avatar ? profile.avatar : "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"} class="img-fluid img-thumbnail" />
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
